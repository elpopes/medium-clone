export const RECEIVE_AVATARS = "avatars/RECEIVE_AVATARS";
export const receiveAvatars = (avatars) => ({
  type: RECEIVE_AVATARS,
  avatars,
});

export const RECEIVE_AVATAR = "avatars/RECEIVE_AVATAR";
export const receiveAvatar = (avatar) => ({
  type: RECEIVE_AVATAR,
  avatar,
});

export const REMOVE_AVATAR = "avatars/REMOVE_AVATAR";
export const removeAvatar = (avatarId) => ({
  type: REMOVE_AVATAR,
  avatarId,
});

export const getAvatars = (state) => {
  if (!state.avatars) return [];
  return Object.values(state.avatars);
};

export const getAvatar = (userId) => (state) => {
  if (!state.avatars) return null;
  return state.avatars.filter((avatar) => {
    return avatar.userId === userId;
  })[0];
};

export const fetchAvatars = () => async (dispatch) => {
  const res = await fetch("api/avatars");
  if (res.ok) {
    const avatars = await res.json();
    dispatch(receiveAvatars(avatars));
  }
};

export const fetchAvatar = (avatarId) => async (dispatch) => {
  const res = await fetch(`api/avatars/${avatarId}`);
  if (res.ok) {
    const avatar = await res.json();
    dispatch(receiveAvatar(avatar));
  }
};

export const createAvatar = (avatar) => (dispatch) => {
  return fetch("/api/avatars", {
    method: "POST",
    body: JSON.stringify(avatar),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((avatar) => dispatch(receiveAvatar(avatar)));
};

export const updateAvatar = (avatar) => (dispatch) => {
  return fetch(`/api/avatars/${avatar.id}`, {
    method: "PATCH",
    body: JSON.stringify(avatar),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((avatar) => dispatch(receiveAvatar(avatar)));
};

export const deleteAvatar = (avatarId) => (dispatch) => {
  return fetch(`/api/avatars/${avatarId}`, {
    method: "DELETE",
  }).then(() => dispatch(removeAvatar(avatarId)));
};

const avatarsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_AVATAR:
      return { ...state, [action.avatar.id]: action.avatar };
    case RECEIVE_AVATARS:
      return { ...state, ...action.avatars };
    case REMOVE_AVATAR:
      const newState = { ...state };
      delete newState[action.avatarId];
      return newState;
    default:
      return state;
  }
};

export default avatarsReducer;
//
