import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <div className="sign-out">
      <div className="sign-out-email">{currentUser.email}</div>
      <button onClick={() => dispatch(logout())}>Sign Out</button>
    </div>
  );
};

export default SignOutButton;
