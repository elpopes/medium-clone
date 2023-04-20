import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";
import sessionReducer from "./session";
import storiesReducer from "./storiesReducer";
import avatarsReducer from "./avatarsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
  stories: storiesReducer,
  avatars: avatarsReducer,
});

let enhancer;

// if (process.env.NODE_ENV === "production") {
//   enhancer = applyMiddleware(thunk);
// } else {
const logger = require("redux-logger").default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// }

const configureStore = (preloadedState) => {
  console.log(preloadedState);
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
