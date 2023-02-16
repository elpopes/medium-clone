import React from "react";
import ByLine from "../Avatar/byLine";

const TrendingItem = ({ story }) => {
  return (
    <div className="trendingItem">
      <ByLine userId={story.authorId} />
      <h2>{story.title}</h2>
    </div>
  );
};

export default TrendingItem;
