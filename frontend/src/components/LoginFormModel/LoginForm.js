import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks/hooks";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/usersReducer";
import "./LoginForm.css";

function LoginForm({ onSuccess }) {
  const [password, onPasswordChange] = useInput("");
  const [credential, onCredentialChange] = useInput("");
  const [errors, onSubmit] = useSubmit({
    onSuccess,
    action: sessionActions.login({ credential, password }),
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    dispatch(loginUser({ credential, password }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
    </form>
  );
}

export default LoginForm;
