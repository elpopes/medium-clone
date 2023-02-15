import { useState, useRef } from "react";
import csrfFetch from "../../store/csrf";

const StoryPhotoButton = ({ onPhotoSelect }) => {
  const [photoFile, setPhotoFile] = useState(null);
  const fileRef = useRef(null);

  const handleFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setPhotoFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photoFile);

    const response = await csrfFetch("/api/photos", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const photo = await response.json();
      onPhotoSelect(photo.photoUrl);
      setPhotoFile(null);
      fileRef.current.value = null;
    }
  };

  return (
    <div>
      <button onClick={() => fileRef.current.click()}>Story Photo</button>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={fileRef} onChange={handleFile} />
        <button>Upload</button>
      </form>
    </div>
  );
};

export default StoryPhotoButton;
