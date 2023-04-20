import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./CommentSection.css";
import CommentPost from "./CommentPost";

const CommentSection = ({ storyId, showComments, toggleComments }) => {
  const comments = useSelector((state) => state.stories[storyId]?.comments);
  const [counter, setCounter] = useState(comments ? comments.length : 0);

  useEffect(() => {
    setCounter(comments ? comments.length : 0);
  }, [comments]);

  return (
    <div className={`comments-section ${showComments ? "show" : ""}`}>
      <span className="cancel-button" onClick={toggleComments}>
        &times;
      </span>
      <span className="retorts-title">
        {counter > 0 ? `Retorts (${counter})` : "Retorts"}
      </span>
      {showComments && (
        <>
          <div className="post-comment">
            <CommentPost storyId={storyId} />
          </div>
          <div className="comments-list">
            {/* Comments for the given storyId will be displayed here */}
          </div>
        </>
      )}
    </div>
  );
};

export default CommentSection;
