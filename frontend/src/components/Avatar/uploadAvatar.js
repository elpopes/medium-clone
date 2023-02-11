import { useState, useRef } from "react";

const UploadAvatar = ({ setNewAvatar }) => {
  const [userId, setUserId] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const fileRef = useRef(null);

  const handleInput = (e) => {
    setUserId(e.currentTarget.value);
  };

  const handleFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setPhotoFile(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => setPhotoUrl(fileReader.result);
    } else setPhotoUrl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar[userId]", userId);
    if (photoFile) {
      formData.append("post[photo]", photoFile);
    } else if (imageFiles.length !== 0) {
      Array.from(imageFiles).forEach((image) => {
        formData.append("avatar[images][]", image);
      });
    }

    const response = await fetch("/api/avatars", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const avatar = await response.json();
      setUserId("");
      setPhotoFile(null);
      setPhotoUrl(null);
      setImageFiles([]);
      setImageUrls([]);
      setNewAvatar(avatar);
      fileRef.current.value = null;
    }
  };

  let preview = null;
  if (photoUrl) preview = <img src={photoUrl} alt="" />;
  else if (imageUrls.length !== 0) {
    preview = imageUrls.map((url) => {
      return <img key={url} src={url} alt="" />;
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userId">User Id</label>
      <input
        type="userId"
        id="userId"
        value={userId}
        onChange={handleInput}
        required
      />

      <input type="file" ref={fileRef} onChange={handleFile} />

      <h3>Image preview</h3>
      {preview}
      <button>Upload your photo</button>
    </form>
  );
};

export default UploadAvatar;
