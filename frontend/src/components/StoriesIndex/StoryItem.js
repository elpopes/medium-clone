import React from "react";

const StoryItem = ({ story }) => {
  return (
    <>
      <li>
        <div>
          <p>{story.title}</p>
          <p>{story.body}</p>
        </div>
      </li>
    </>
  );
};

export default StoryItem;
