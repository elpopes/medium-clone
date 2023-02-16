import React from "react";
import SignedInNav from "../signedInNav";
import SignedOutNav from "../signedOutNav";
import { useSelector } from "react-redux";

const StoryItem = ({ story }) => {
  const loggedIn = useSelector((state) => state.session.user);
  return (
    <>
      {loggedIn ? SignedInNav : SignedOutNav}
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
