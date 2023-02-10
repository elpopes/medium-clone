import React from "react";
import { fetchStories, getStories } from "../../store/storiesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import StoryItem from "./StoryItem";

const StoriesIndex = () => {
  const dispatch = useDispatch();
  const stories = useSelector(getStories);
  useEffect(() => {
    dispatch(fetchStories());
  }, []);
  return (
    <>
      <ul>
        {stories.map((story, i) => {
          return <StoryItem key={i} story={story} />;
        })}
      </ul>
    </>
  );
};

export default StoriesIndex;
