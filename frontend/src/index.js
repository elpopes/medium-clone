import React from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./context/Modal";
import App from "./App";
import configureStore from "./store";
import { restoreSession } from "./store/csrf";
import { createUser, loginUser, logoutUser } from "./store/usersReducer.js";
import { Provider } from "react-redux";

let currentUser;

if (sessionStorage.getItem("currentUser") !== "undefined") {
  currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
}

let initialState = {};

if (currentUser) {
  initialState = {
    user: currentUser,
  };
}

const store = configureStore(initialState);

window.store = store;
window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;

const InitializeApp = () => {
  return (
    <ModalProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ModalProvider>
  );
};

const initialize = async () => {
  await restoreSession();
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <InitializeApp />
    </React.StrictMode>
  );
};

initialize();
