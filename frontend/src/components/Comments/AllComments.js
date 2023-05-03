import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../store/storiesReducer";
import ByLine from "../Avatar/byLine";

const AllComments = ({ storyId }) => {
  const storyComments = useSelector(
    (state) => state.stories[storyId]?.comments
  );
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const comments = storyComments ? storyComments : [];
  const [showDeletePopup, setShowDeletePopup] = useState(null);
  const [showWarningPopup, setShowWarningPopup] = useState(false);

  const handleDeleteComment = (storyId, commentId) => {
    dispatch(deleteComment(storyId, commentId));
    setShowDeletePopup(null);
    setShowWarningPopup(false);
  };

  return (
    <div className="all-comments-container">
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => {
            // Check if the current user is the author of the comment
            const isAuthor = user && comment.comment_author_id === user.id;
            return (
              <li key={comment.id}>
                <div className="comment-container">
                  {/* Render the ByLine component only when the user is logged in */}
                  {user && <ByLine userId={comment.commentAuthor.id} />}
                  {/* Render the comment options only when the user is the author */}
                  {isAuthor && (
                    <span
                      className="comment-options"
                      onClick={() =>
                        setShowDeletePopup(
                          showDeletePopup === comment.id ? null : comment.id
                        )
                      }
                    >
                      ...
                    </span>
                  )}
                </div>
                <div>{comment.body}</div>
                {showDeletePopup === comment.id && (
                  <div className="delete-popup">
                    <button onClick={() => setShowWarningPopup(true)}>
                      Delete
                    </button>
                  </div>
                )}
                {showWarningPopup && (
                  <div className="warning-popup">
                    <p>Are you sure you want to delete this comment?</p>
                    <button
                      onClick={() => handleDeleteComment(storyId, comment.id)}
                    >
                      Yes
                    </button>
                    <button onClick={() => setShowWarningPopup(false)}>
                      No
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
};

export default AllComments;
