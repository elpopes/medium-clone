import React from "react";

const StoryItem = ({ story }) => {
  return (
    <>
      <li>
        <div>
          <p>{story.title}</p>
          <p>{story.body}</p>
          <img src={story.photoUrl} alt="" />
        </div>
      </li>
    </>
  );
};

export default StoryItem;
