import React from "react";
import ByLine from "../Avatar/byLine";
import { Link } from "react-router-dom";

const TrendingItem = ({ story }) => {
  return (
    <div className="trendingItem">
      <ByLine userId={story.authorId} />
      <Link to={`/stories/${story.id}`}>{story.title}</Link>
    </div>
  );
};

export default TrendingItem;
