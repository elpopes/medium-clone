import csrfFetch from "./csrf.js";

export const RECEIVE_USERS = "users/RECEIVE_USERS";
export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const RECEIVE_USER = "users/RECEIVE_USER";
export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const REMOVE_USER = "users/REMOVE_USER";
export const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId,
});

export const getUsers = (state) => {
  if (!state.users) return [];
  return Object.values(state.users);
};

export const getUser = (userId) => (state) => {
  if (!state.users) return null;
  return state.users[userId];
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await fetch("api/users");
    if (res.ok) {
      const users = await res.json();
      //   console.log("Received users:", users);
      //   debugger;
      dispatch(receiveUsers(users));
    }
  } catch (error) {
    console.log("Error fetching users:", error);
  }
};

export const fetchUser = (userId) => async (dispatch) => {
  const res = await csrfFetch(`api/users/${userId}`);
  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user));
  }
};

export const loginUser = (user) => async (dispatch) => {
  let res = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify(user),
  });
  let data = await res.json();
  sessionStorage.setItem("currentUser", JSON.stringify(data.user));

  dispatch(receiveUser(data.user));
};

export const logoutUser = (userId) => async (dispatch) => {
  await csrfFetch("/api/session", {
    method: "DELETE",
  });
  sessionStorage.setItem("currentUser", null);
  dispatch(removeUser(userId));
};

export const createUser = (user) => async (dispatch) => {
  let res = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
  let data = await res.json();
  sessionStorage.setItem("currentUser", JSON.stringify(data.user));
  dispatch(receiveUser(data.user));
};

export const updateUser = (user) => (dispatch) => {
  return csrfFetch(`/api/users/${user.id}`, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((user) => dispatch(receiveUser(user)));
};

export const deleteUser = (userId) => (dispatch) => {
  return fetch(`/api/users/${userId}`, {
    method: "DELETE",
  }).then(() => dispatch(removeUser(userId)));
};

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, [action.user.id]: action.user };
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case REMOVE_USER:
      const newState = { ...state };
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
