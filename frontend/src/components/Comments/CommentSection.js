import "./CommentSection.css";

const CommentSection = ({ storyId, showComments, toggleComments }) => {
  const counter = 0;

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
            {/* PostComment component for the given storyId will be rendered here */}
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
