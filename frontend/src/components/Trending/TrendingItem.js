import React from "react";

const TrendingItem = ({ story }) => {
  return (
    <div className="trendingItem">
      <h2>{story.title}</h2>
    </div>
  );
};

export default TrendingItem;
