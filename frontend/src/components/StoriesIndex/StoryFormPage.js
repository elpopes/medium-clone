import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStory } from "../../store/storiesReducer";

const StoryFormPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const author_id = currentUser.id;
    const story = { title, body, author_id };
    dispatch(createStory(story));

    window.location = "/me-stories";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="body"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          value={body}
          onChange={handleTextChange}
          placeholder="Tell your story..."
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StoryFormPage;
