import React from "react";
import { Link } from "react-router-dom";

const MyStory = ({ story }) => {
  return (
    <li className="story-list-item">
      <Link className="story-link" to={`/stories/${story.id}`}>
        <h2 className="story-title"> {story.title}</h2>
        <p className="story-body">{story.body}</p>
        <div story-image-container></div>
      </Link>
      <div story-bottom-container></div>
    </li>
  );
};

export default MyStory;
