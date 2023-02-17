import React from "react";
import "./StoryItem.css";

const TrendingItem = ({ story }) => {
  return (
    <>
      <li>
        <div className="trending-item">
          <div className="content">
            <p className="title">{story.title}</p>
            <p className="body">{story.body}</p>
          </div>
          <div className="photo-container">
            <img src={story.photoUrl} alt="" />
          </div>
        </div>
      </li>
    </>
  );
};

export default TrendingItem;
