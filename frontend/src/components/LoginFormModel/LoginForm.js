import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks/hooks";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
// import DemoUser from "../DemoUser";

function LoginForm() {
  const [password, onPasswordChange] = useInput("");
  const [credential, onCredentialChange] = useInput("");
  const [errors, onFormSubmit] = useSubmit({
    action: sessionActions.login({ credential, password }),
  });

  const dispatch = useDispatch();

  const handleDemoUser = () => {
    dispatch(
      sessionActions.login({ credential: "theGrey", password: "password" })
    );
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h1>Welcome back.</h1>
      <ul className="form-errors">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <label htmlFor="credential">Username or Email</label>
      <input
        id="credential"
        type="text"
        value={credential}
        onChange={onCredentialChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <button type="submit">Log In</button>
      <br />
      <br />
      <button type="button" onClick={handleDemoUser}>
        Be the wiz
      </button>
    </form>
  );
}

export default LoginForm;
