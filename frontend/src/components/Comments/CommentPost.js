import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ByLine from "../Avatar/byLine";
import { createComment } from "../../store/commentsReducer";
import { updateComment } from "../../store/commentsReducer";

const CommentPost = ({ storyId, parentId, comment }) => {
  const authorId = useSelector((state) => state.session.user?.id);
  const dispatch = useDispatch();
  const [body, setBody] = useState(
    comment ? comment.body : "What are ye thoughts?"
  );

  const [inputColor, setInputColor] = useState("grey");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      dispatch(
        updateComment({
          id: comment.id,
          body: body,
        })
      );
    } else {
      dispatch(
        createComment({
          story_id: storyId,
          parent_id: parentId,
          body: body,
          author_id: authorId,
        })
      );
    }
  };

  const handleFocus = () => {
    if (body === "What are ye thoughts?") {
      setBody("");
    }
    setInputColor("black");
  };

  const handleBlur = () => {
    if (body.trim() === "") {
      setBody("What are ye thoughts?");
      setInputColor("grey");
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ color: inputColor }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentPost;
