import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ByLine from "../Avatar/byLine";
import { createComment } from "../../store/storiesReducer";
import { updateComment } from "../../store/storiesReducer";
import { Modal } from "../../context/Modal"; // Import Modal
import SignUpForm from "../SignUpForm"; // Import SignUpForm

const CommentPost = ({ storyId, parentId, comment }) => {
  const user = useSelector((state) => state.session.user);
  const authorId = user?.id;
  const dispatch = useDispatch();
  const [body, setBody] = useState(
    comment ? comment.body : "What are ye thoughts?"
  );

  const [inputColor, setInputColor] = useState("grey");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment) {
      await dispatch(
        updateComment(storyId, {
          id: comment.id,
          body: body,
        })
      );
    } else {
      await dispatch(
        createComment(storyId, {
          story_id: storyId,
          parentId: parentId,
          body: body,
          author_id: authorId,
        })
      );
    }
    setBody("What are ye thoughts?");
    setInputColor("grey");
  };

  const handleFocus = () => {
    if (!user) {
      setShowModal(true);
      return;
    }

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
          <label htmlFor="body"></label>
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
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </div>
  );
};

export default CommentPost;
