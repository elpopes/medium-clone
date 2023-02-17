import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (!currentUser) {
      history.push("/");
    }
  }, [history]);

  return (
    <div className="sign-out">
      <button onClick={() => dispatch(logout())}>Sign out</button>
      <div className="sign-out-email">
        {JSON.parse(sessionStorage.getItem("currentUser")).email}
      </div>
    </div>
  );
};

export default SignOutButton;
