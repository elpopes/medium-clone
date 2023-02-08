import React, { useState, useEffect } from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";

const ProfileDropDown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useDispatch();

  const toggleDropDown = () => setShowDropDown(!showDropDown);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropDown && !event.target.closest(".profile-dropdown")) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropDown]);

  return (
    <div className="profile-dropdown">
      <div className="profile-dropdown-toggle" onClick={toggleDropDown}>
        <i className="fa fa-caret-down" />
      </div>
      {showDropDown && (
        <ul className="profile-dropdown-menu">
          <li>Profile</li>
          <li>Lists</li>
          <li>Stories</li>
          <li>Stats</li>
          <button onClick={() => dispatch(logout())}>Sign Out</button>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropDown;
