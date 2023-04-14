import { useState } from "react";

const CommentPost = ({
  storyId,
  parentId,
  comment,
  createComment,
  updateComment,
  authorId,
}) => {
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
  );
};

export default CommentPost;
