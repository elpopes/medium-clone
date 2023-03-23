export const RECEIVE_COMMENTS = "comments/RECEIVE_COMMENTS";
export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments,
});

export const RECEIVE_COMMENT = "comments/RECEIVE_COMMENT";
export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const REMOVE_COMMENT = "comments/REMOVE_COMMENT";
export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

export const getComments = (state) => {
  if (!state.comments) return [];
  return Object.values(state.comments);
};

export const getComment = (commentId) => (state) => {
  if (!state.comments) return null;
  return state.comments[commentId];
};

export const fetchComments = () => async (dispatch) => {
  const res = await fetch("api/comments");
  if (res.ok) {
    const comments = await res.json();
    dispatch(receiveComments(comments));
  }
};

export const fetchComment = (commentId) => async (dispatch) => {
  const res = await fetch(`api/comments/${commentId}`);
  if (res.ok) {
    const comment = await res.json();
    dispatch(receiveComment(comment));
  }
};

export const createComment = (comment) => (dispatch) => {
  return fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((comment) => dispatch(receiveComment(comment)));
};

export const updateComment = (comment) => (dispatch) => {
  return fetch(`/api/comments/${comment.id}`, {
    method: "PATCH",
    body: JSON.stringify(comment),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = (commentId) => (dispatch) => {
  return fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  }).then(() => dispatch(removeComment(commentId)));
};

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENT:
      return { ...state, [action.comment.id]: action.comment };
    case RECEIVE_COMMENTS:
      return { ...state, ...action.comments };
    case REMOVE_COMMENT:
      const newState = { ...state };
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
