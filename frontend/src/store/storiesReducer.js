import csrfFetch from "./csrf.js";
import produce from "immer";

export const RECEIVE_STORIES = "stories/RECEIVE_STORIES";
export const RECEIVE_STORY = "stories/RECEIVE_STORY";
export const REMOVE_STORY = "stories/REMOVE_STORY";
export const RECEIVE_COMMENT = "stories/RECEIVE_COMMENT";
export const REMOVE_COMMENT = "stories/REMOVE_COMMENT";

export const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories,
});

export const receiveStory = (story) => ({
  type: RECEIVE_STORY,
  story,
});

export const removeStory = (storyId) => ({
  type: REMOVE_STORY,
  storyId,
});

export const receiveComment = (storyId, comment) => ({
  type: RECEIVE_COMMENT,
  payload: { storyId, comment },
});

export const fetchStories = () => async (dispatch) => {
  const res = await csrfFetch("api/stories");
  if (res.ok) {
    const stories = await res.json();
    dispatch(receiveStories(stories));
  }
};

export const deleteStory = (storyId) => (dispatch) => {
  return csrfFetch(`api/stories/${storyId}`, {
    method: "DELETE",
  }).then(() => dispatch(removeStory(storyId)));
};
export const removeComment = (storyId, commentId) => ({
  type: REMOVE_COMMENT,
  payload: { storyId, commentId },
});

export const getStory = (storyId) => (state) => {
  if (!state.stories) return null;
  return state.stories[storyId];
};

export const fetchStory = (storyId) => async (dispatch) => {
  const res = await csrfFetch(`api/stories/${storyId}`);
  if (res.ok) {
    const story = await res.json();
    dispatch(receiveStory(story));
  }
};

export const updateStory = (story) => (dispatch) => {
  return fetch(`/api/stories/${story.id}`, {
    method: "PATCH",
    body: JSON.stringify(story),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((story) => dispatch(receiveStory(story)));
};

export const createStory = (story) => (dispatch) => {
  return csrfFetch("/api/stories", {
    method: "POST",
    body: JSON.stringify(story),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((story) => dispatch(receiveStory(story)));
};

export const getStories = (state) => {
  if (!state.stories) return [];
  return Object.values(state.stories);
};

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

export const deleteComment = (storyId, commentId) => async (dispatch) => {
  await csrfFetch(`/api/stories/${storyId}/comments/${commentId}`, {
    method: "DELETE",
  });

  dispatch(removeComment(storyId, commentId));
};

const storiesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STORY:
      return { ...state, [action.story.id]: action.story };
    case RECEIVE_STORIES:
      return { ...state, ...action.stories };
    case REMOVE_STORY:
      const newState = { ...state };
      delete newState[action.storyId];
      return newState;
    case RECEIVE_COMMENT:
      const { storyId, comment } = action.payload;
      return produce(state, (draftState) => {
        if (!draftState[storyId].comments) {
          draftState[storyId].comments = [];
        }
        draftState[storyId].comments.push(comment);
      });
    case REMOVE_COMMENT:
      const { storyId: id, commentId } = action.payload;
      return produce(state, (draftState) => {
        const commentIndex = draftState[id].comments.findIndex(
          (comment) => comment.id === commentId
        );
        if (commentIndex !== -1) {
          draftState[id].comments.splice(commentIndex, 1);
        }
      });
    default:
      return state;
  }
};

export default storiesReducer;
