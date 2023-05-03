import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import csrfFetch from "../../store/csrf";

const UploadAvatar = ({ setNewAvatar, setShowModal2 }) => {
  const [photoFile, setPhotoFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const fileRef = useRef(null);
  const [currentAvatar, setCurrentAvatar] = useState(null);
  const currentUser = useSelector((state) => state.session.user);
  const handleCancel = (e) => {
    e.stopPropagation();
    setShowModal2(false);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await csrfFetch(`/api/avatars/${currentUser.id}`);
      const data = await response.json();
      if (data.avatar) {
        setCurrentAvatar(data.avatar);
      }
    }
    fetchData();
  }, [currentUser.id]);

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
    formData.append("avatar[user_id]", currentUser.id);

    let requestMethod = "POST";

    if (photoFile) {
      if (currentAvatar) {
        formData.append("_method", "PATCH");
        requestMethod = "PATCH";
        window.location.reload();
      }
      formData.append("avatar[photo]", photoFile);
      window.location.reload();
    } else if (imageFiles.length !== 0) {
      Array.from(imageFiles).forEach((image) => {
        formData.append("avatar[images][]", image);
      });
    }

    const response = await csrfFetch(
      requestMethod === "PATCH"
        ? `/api/avatars/${currentAvatar.id}`
        : "/api/avatars",
      {
        method: requestMethod,
        body: formData,
      }
    );

    if (response.ok) {
      const avatar = await response.json();
      setPhotoFile(null);
      setPhotoUrl(null);
      setImageFiles([]);
      setImageUrls([]);
      setNewAvatar(avatar);
      fileRef.current.value = null;
    }
  };

  let preview = null;
  if (photoUrl) {
    preview = <img src={photoUrl} alt="" style={{ maxHeight: "400px" }} />;
  } else if (currentAvatar && currentAvatar.photoUrl) {
    preview = (
      <img src={currentAvatar.photoUrl} alt="" style={{ maxHeight: "400px" }} />
    );
  } else if (imageUrls.length !== 0) {
    preview = imageUrls.map((url) => {
      return <img key={url} src={url} alt="" style={{ maxHeight: "400px" }} />;
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={currentUser.username} readOnly />

      <input type="file" ref={fileRef} onChange={handleFile} />

      <h3>Image preview</h3>
      {preview}
      <button>Upload your photo</button>
      <button type="button" onClick={(e) => handleCancel(e)}>
        Cancel
      </button>
    </form>
  );
};

export default UploadAvatar;
