import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import StoryNav from "./StoryNav";
import csrfFetch from "../../store/csrf";

import "./StoryFormPage.css";

const StoryFormPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const fileRef = useRef(null);
  const currentUser = useSelector((state) => state.session.user);

  const handleFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setPhotoFile(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => setPhotoUrl(fileReader.result);
    } else {
      setPhotoUrl(null);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("author_id", currentUser.id);
    formData.append("photo", photoFile);

    try {
      const res = await csrfFetch("/api/stories", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw res;
      }
      const createdStory = await res.json();
      console.log(createdStory);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <StoryNav />
      <form className="story-form" onSubmit={handleSubmit}>
        <div className="title-container">
          <input
            className="title-input"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
        </div>
        <div className="body-container">
          <textarea
            className="body-input"
            value={body}
            onChange={handleTextChange}
            placeholder="Tell your story..."
          />
        </div>
        <div className="photo-container">
          <input type="file" ref={fileRef} onChange={handleFile} />
          <h3>Image preview</h3>
          {photoUrl && <img src={photoUrl} alt="Preview" />}
        </div>
        <button className="publish-button" type="submit">
          Publish
        </button>
      </form>
    </>
  );
};

export default StoryFormPage;
