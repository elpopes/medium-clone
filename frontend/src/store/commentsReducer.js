import csrfFetch from "./csrf.js";

export const RECEIVE_COMMENT = "comments/RECEIVE_COMMENT";
export const REMOVE_COMMENT = "comments/REMOVE_COMMENT";
export const RECEIVE_COMMENTS = "comments/RECEIVE_COMMENTS";

export const receiveComment = (storyId, comment) => ({
  type: RECEIVE_COMMENT,
  payload: { storyId, comment },
});

export const createComment = (storyId, comment) => async (dispatch) => {
  const res = await csrfFetch(`/api/stories/${storyId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  dispatch(receiveComment(storyId, data));
};

export const updateComment = (storyId, comment) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${comment.id}`, {
    method: "PATCH",
    body: JSON.stringify(comment),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  dispatch(receiveComment(storyId, data));
};

export const removeComment = (storyId, commentId) => ({
  type: REMOVE_COMMENT,
  payload: { id: storyId, commentId },
});

export const deleteComment = (storyId, commentId) => async (dispatch) => {
  await csrfFetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  dispatch(removeComment(storyId, commentId));
};

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENT:
      const { storyId, comment } = action.payload;
      return {
        ...state,
        [storyId]: {
          ...state[storyId],
          comments: {
            ...state[storyId].comments,
            [comment.id]: comment,
          },
        },
      };
    case RECEIVE_COMMENTS:
      const newState = { ...state };
      action.comments.forEach((comment) => {
        if (!newState[comment.story_id]) {
          newState[comment.story_id] = {
            comments: {},
          };
        }
        newState[comment.story_id].comments[comment.id] = comment;
      });
      return newState;
    case REMOVE_COMMENT:
      const { id, commentId: removedCommentId } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          comments: Object.fromEntries(
            Object.entries(state[id].comments).filter(
              ([key]) => key !== removedCommentId
            )
          ),
        },
      };
    default:
      return state;
  }
};

export default commentsReducer;
