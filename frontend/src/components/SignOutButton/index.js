import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className="sign-out">
      <button onClick={handleSignout}>Sign out</button>
      <div className="sign-out-email">
        {JSON.parse(sessionStorage.getItem("currentUser")).email}
      </div>
    </div>
  );
};

export default SignOutButton;
