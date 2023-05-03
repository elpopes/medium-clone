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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  middleware.push(logger);
}

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
