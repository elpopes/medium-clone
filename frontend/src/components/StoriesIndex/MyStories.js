import React from "react";
import { fetchStories, getStories } from "../../store/storiesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MyStory from "./MyStory";

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
    for (let i = 0; i < stories.length; i++) {
      let story = stories[i];
      if (story.authorId === currentUserId) {
        userStories.push(story);
      }
    }
  }

  return (
    <>
      <ul>
        <h1>These me stories</h1>
        {userStories.map((story, i) => {
          return <MyStory key={i} story={story} />;
        })}
      </ul>
    </>
  );
};

export default MyStoriesIndex;
