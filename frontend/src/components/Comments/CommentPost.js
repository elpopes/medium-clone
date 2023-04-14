import { useState } from "react";
import { useSelector } from "react-redux";
import ByLine from "../Avatar/byLine";
import { createComment } from "../../store/commentsReducer";
import { updateComment } from "../../store/commentsReducer";

const CommentPost = ({ storyId, parentId, comment }) => {
  const authorId = useSelector((state) => state.session.user?.id);
  const [body, setBody] = useState(comment ? comment.body : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      updateComment({
        id: comment.id,
        body: body,
      });
    } else {
      createComment({
        story_id: storyId,
        parent_id: parentId,
        body: body,
        author_id: authorId,
      });
    }
  };

  return (
    <div>
      {authorId && <ByLine userId={authorId} />}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentPost;
