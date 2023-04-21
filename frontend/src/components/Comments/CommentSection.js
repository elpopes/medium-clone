import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./CommentSection.css";
import CommentPost from "./CommentPost";
import AllComments from "./AllComments";

const CommentSection = ({ storyId, showComments, toggleComments }) => {
  console.log(useSelector((state) => state.stories[storyId].comments));
  const comments = useSelector((state) => state.stories[storyId]?.comments);
  const [counter, setCounter] = useState(comments ? comments.length : 0);

  useEffect(() => {
    setCounter(comments ? comments.length : 0);
  }, [comments]);

  return (
    <div className={`comments-section ${showComments ? "show" : ""}`}>
      <div className="comments-header">
        <span className="retorts-title">
          {counter > 0 ? `Retorts (${counter})` : "Retorts"}
        </span>
        <span className="cancel-button" onClick={toggleComments}>
          &times;
        </span>
      </div>
      {showComments && (
        <>
          <div className="post-comment">
            <CommentPost storyId={storyId} />
          </div>
          <div className="comments-list">
            <AllComments storyId={storyId} />
          </div>
        </>
      )}
    </div>
  );
};

export default CommentSection;
