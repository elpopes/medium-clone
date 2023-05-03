import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import csrfFetch from "../../store/csrf";

const UploadAvatar = ({ setNewAvatar }) => {
  const [photoFile, setPhotoFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const fileRef = useRef(null);
  const [currentAvatar, setCurrentAvatar] = useState(null);
  const currentUser = useSelector((state) => state.session.user);

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

    let requestMethod = "POST"; // Default to POST

    if (photoFile) {
      if (currentAvatar) {
        formData.append("_method", "PATCH");
        requestMethod = "PATCH"; // Update request method to PATCH
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
        method: requestMethod, // Use the correct request method
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
      // window.location.reload();
    }
  };

  let preview = null;
  if (photoUrl) {
    preview = <img src={photoUrl} alt="" />;
  } else if (currentAvatar && currentAvatar.photoUrl) {
    preview = <img src={currentAvatar.photoUrl} alt="" />;
  } else if (imageUrls.length !== 0) {
    preview = imageUrls.map((url) => {
      return <img key={url} src={url} alt="" />;
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
    </form>
  );
};

export default UploadAvatar;
