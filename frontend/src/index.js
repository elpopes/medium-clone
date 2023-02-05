import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
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

window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;

const InitializeApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

ReactDOM.render(
  <React.StrictMode>
    <InitializeApp />
  </React.StrictMode>,
  document.getElementById("root")
);

restoreSession().then(InitializeApp);

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import configureStore from "./store/index";
// import csrfFetch, { restoreSession } from "./store/csrf";
// import * as sessionActions from "./store/session";
// import { createUser, loginUser, logoutUser } from "./store/usersReducer";

// const store = configureStore();

// const initializeApp = () => {
//   //   debugger;
//   ReactDOM.render(
//     <React.StrictMode>
//       {/* debugger */}
//       <Provider store={store}>
//         {/* debugger */}
//         <App />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// };

// if (process.env.NODE_ENV !== "production") {
//   //   debugger;
//   window.createUser = createUser;
//   window.loginUser = loginUser;
//   window.logoutUser = logoutUser;
//   window.store = store;
//   window.csrfFetch = csrfFetch;
//   window.sessionActions = sessionActions;
// }

// function Root() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <h1>Hello from root!</h1>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   );
// }

// const renderApplication = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Root />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// };

// if (
//   sessionStorage.getItem("currentUser") === "null" ||
//   sessionStorage.getItem("X-CSRF-Token") === "null"
// ) {
//   //   debugger;
//   store.dispatch(sessionActions.restoreSession()).then(renderApplication);
//   // debugger;
// } else {
//   //   debugger;
//   renderApplication();
// }

// restoreSession().then(initializeApp);
