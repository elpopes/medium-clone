import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  //   debugger;
  return (
    <div className="sign-out">
      <button onClick={() => dispatch(logout())}>Sign Out</button>
      <div className="sign-out-email">{currentUser.email}</div>
    </div>
  );
};

export default SignOutButton;
