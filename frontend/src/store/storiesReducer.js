//
export const RECEIVE_STORIES = "stories/RECEIVE_STORIES";
export const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories,
});

export const RECEIVE_STORY = "stories/RECEIVE_STORY";
export const receiveStory = (story) => ({
  type: RECEIVE_STORY,
  story,
});

export const REMOVE_STORY = "stories/REMOVE_STORY";
export const removeStory = (storyId) => ({
  type: REMOVE_STORY,
  storyId,
});

export const getStories = (state) => {
  if (!state.stories) return [];
  return Object.values(state.stories);
};

export const getStory = (storyId) => (state) => {
  if (!state.stories) return null;
  return state.stories[storyId];
};

export const fetchStories = () => async (dispatch) => {
  const res = await fetch("api/stories");
  if (res.ok) {
    const stories = await res.json();
    dispatch(receiveStories(stories));
  }
};

export const fetchStory = (storyId) => async (dispatch) => {
  const res = await fetch(`api/stories/${storyId}`);
  if (res.ok) {
    const story = await res.json();
    dispatch(receiveStory(story));
  }
};

export const createStory = (story) => (dispatch) => {
  return fetch("/api/stories", {
    method: "POST",
    body: JSON.stringify(story),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((story) => dispatch(receiveStory(story)));
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

export const deleteStory = (storyId) => (dispatch) => {
  return fetch(`/api/stories/${storyId}`, {
    method: "DELETE",
  }).then(() => dispatch(removeStory(storyId)));
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
    default:
      return state;
  }
};

export default storiesReducer;
//
