import React from "react";
import { fetchStories, getStories } from "../../store/storiesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MyStory from "./MyStory";
import "./MyStories.css";
import SignedInNav from "../signedInNav";

const MyStoriesIndex = () => {
  const dispatch = useDispatch();
  const stories = useSelector(getStories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const currentUserId = currentUser.id;

  let userStories = [];

  if (stories.length > 0) {
    for (let i = stories.length - 1; i >= 0; i--) {
      let story = stories[i];
      if (story.authorId === currentUserId) {
        userStories.push(story);
      }
    }
  }

  return (
    <>
      <SignedInNav />
      <ul className="story-list">
        <h1>Your Stories</h1>
        {userStories.map((story, i) => {
          return <MyStory key={i} story={story} />;
        })}
      </ul>
    </>
  );
};

export default MyStoriesIndex;
