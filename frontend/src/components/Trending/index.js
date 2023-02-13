import React from "react";
import { fetchStories, getStories } from "../../store/storiesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TrendingItem from "./TrendingItem";
import "./Trending.css";

const Trending = () => {
  const dispatch = useDispatch();
  const stories = useSelector(getStories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);
  return (
    <div className="trending-container">
      <h1>Trending on Medium-Earth</h1>
      <ol>
        {stories.slice(0, 6).map((story, i) => {
          return (
            <li key={i}>
              <div className="numbers">{`0${i + 1}`}</div>
              <TrendingItem story={story} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Trending;
