import React from "react";

const TrendingItem = ({ story }) => {
  return (
    <li>
      <div className="trendingItem">
        <h2>{story.title}</h2>
      </div>
    </li>
  );
};

export default TrendingItem;
