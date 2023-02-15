import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStory } from "../../store/storiesReducer";
import StoryNav from "./StoryNav";
import "./StoryFormPage.css";
import StoryPhotoButton from "./StoryPhotoButton";

const StoryFormPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setBody(event.target.value);
  };

  const handlePhotoSelect = (url) => {
    setPhotoUrl(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const author_id = currentUser.id;
    const story = { title, body, author_id, photo_url: photoUrl };
    dispatch(createStory(story));

    window.location = "/me-stories";
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
        <StoryPhotoButton onPhotoSelect={handlePhotoSelect} />
        <button className="publish-button" type="submit">
          Publish
        </button>
      </form>
    </>
  );
};

export default StoryFormPage;
