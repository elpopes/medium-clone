import React from "react";
import { useSelector } from "react-redux";
import ByLine from "../Avatar/byLine";

const AllComments = ({ storyId }) => {
  const storyComments = useSelector(
    (state) => state.stories[storyId]?.comments
  );

  const comments = storyComments ? storyComments : [];

  return (
    <div className="all-comments-container">
      <h2>All Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => {
            console.log("Comment author ID:", comment.comment_author_id);
            return (
              <li key={comment.id}>
                <ByLine userId={comment.comment_author_id} />
                <div>{comment.body}</div>
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
