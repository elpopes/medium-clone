import React from "react";
import { fetchStories, getStories } from "../../store/storiesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MyStory from "./MyStory";

const StoriesIndex = () => {
  const dispatch = useDispatch();
  const stories = useSelector(getStories);
  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);
  return (
    <>
      <ul>
        {stories
          .slice()
          .reverse()
          .map((story, i) => {
            return <MyStory key={i} story={story} />;
          })}
      </ul>
    </>
  );
};

export default StoriesIndex;
