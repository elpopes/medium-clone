import csrfFetch from "./csrf.js";

const SET_CURRENT_USER = "session/setCurrentUser";
const REMOVE_CURRENT_USER = "session/removeCurrentUser";

const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,
});

const storeCSRFToken = (response) => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};

const storeCurrentUser = (user, avatar) => {
  if (user) {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    sessionStorage.setItem("currentUserAvatar", JSON.stringify(avatar));
  } else {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUserAvatar");
  }
};

export const login =
  ({ credential, password }) =>
  async (dispatch) => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password }),
    });
    const data = await response.json();
    storeCurrentUser(data.user, data.avatar);
    dispatch(setCurrentUser(data.user));
    return response;
  };

export const restoreSession = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  storeCurrentUser(null);
  dispatch(removeCurrentUser());
  return response;
};

const initialState = {
  user: JSON.parse(sessionStorage.getItem("currentUser")),
  avatar: (() => {
    try {
      return JSON.parse(sessionStorage.getItem("currentUserAvatar"));
    } catch (e) {
      return null;
    }
  })(),
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
