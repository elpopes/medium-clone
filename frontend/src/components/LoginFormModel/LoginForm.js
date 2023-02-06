import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks/hooks";

function LoginForm({ onSuccess }) {
  const [password, onPasswordChange] = useInput("");
  const [credential, onCredentialChange] = useInput("");
  const [errors, onSubmit] = useSubmit({
    onSuccess,
    action: sessionActions.login({ credential, password }),
  });

  return (
    <form className="form" onSubmit={onSubmit}>
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
