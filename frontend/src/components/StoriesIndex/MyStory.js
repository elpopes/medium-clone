import React from "react";

const MyStory = ({ story }) => {
  return (
    <>
      <li>
        <div>
          <p>{story.title}</p>
          <p>{story.body}</p>
          <p>{story.author}</p>
        </div>
      </li>
    </>
  );
};

export default MyStory;
