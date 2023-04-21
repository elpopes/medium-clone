import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../store/storiesReducer";
import ByLine from "../Avatar/byLine";

const AllComments = ({ storyId }) => {
  const storyComments = useSelector(
    (state) => state.stories[storyId]?.comments
  );
  const session = useSelector((state) => state.session);
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
            const isAuthor = comment.comment_author_id === session.user.id;
            return (
              <li key={comment.id}>
                <div className="comment-container">
                  <ByLine userId={comment.comment_author_id} />
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
