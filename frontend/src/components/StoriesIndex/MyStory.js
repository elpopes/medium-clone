import React from "react";
import { Link } from "react-router-dom";

const MyStory = ({ story }) => {
  const snip = (body) => {
    const words = body.split(" ");
    let truncatedBody = "";
    for (let i = 0; i < 25; i++) {
      truncatedBody += words[i] + " ";
    }
    return truncatedBody + "...";
  };

  return (
    <li className="story-list-item">
      <Link className="story-link" to={`/stories/${story.id}`}>
        <div className="story-container">
          <h2 className="story-title"> {story.title}</h2>
          <p className="story-body">{snip(story.body)}</p>
        </div>
        <div className="story-image-container">
          <img src={story.photoUrl} alt="" />
        </div>
      </Link>
      <div story-bottom-container></div>
    </li>
  );
};

export default MyStory;
