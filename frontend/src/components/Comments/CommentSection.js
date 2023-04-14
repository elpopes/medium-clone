import "./CommentSection.css";

const CommentSection = ({ storyId, showComments, toggleComments }) => {
  return (
    <div className={`comments-section ${showComments ? "show" : ""}`}>
      {showComments && (
        <>
          <div className="cancel-button" onClick={toggleComments}>
            &times;
          </div>
          <div className="comments-list">
            {/* Comments for the given storyId will be displayed here */}
          </div>
          <div className="post-comment">
            {/* PostComment component for the given storyId will be rendered here */}
          </div>
        </>
      )}
    </div>
  );
};

export default CommentSection;
