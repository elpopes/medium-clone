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
      <div className="top">
        <div className="obey-me">
          <i className="fa-solid fa-arrow-trend-up" />
        </div>
        <h1>Trending on Medium-Earths</h1>
      </div>
      <ol>
        {stories
          .slice()
          .reverse()
          .slice(0, 6)
          .map((story, i) => {
            const index = i + 1;
            return (
              <li key={i}>
                <div className="numbers">{`0${index}`}</div>
                <TrendingItem story={story} />
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default Trending;
