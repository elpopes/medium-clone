import React, { useState, useEffect } from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import UserAvatar from "../Avatar/UserAvatar";
import "./ProfileDropDown.css";
import SignOutButton from "../SignOutButton";

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
      <UserAvatar />
      <div className="profile-dropdown-toggle" onClick={toggleDropDown}>
        <i className="fa fa-caret-down" />
      </div>
      {showDropDown && (
        <ul className="profile-dropdown-menu">
          <div className="navigation">
            <li>Profile</li>
            <li>Lists</li>
            <li>Stories</li>
            <li>Stats</li>
          </div>
          <div className="settings">
            <li>Settings</li>
            <li>Refine recommendations</li>
            <li>Manage publications</li>
          </div>
          <div className="members">
            <li>Become a member</li>
            <li>Apply to the Partner Program</li>
            <li>Gift a membership</li>
          </div>
          <SignOutButton />
          <div className="footie">
            <li>Help</li>
            <li>Status</li>
            <li>Writers</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>About</li>
            <li>Text to Speech</li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropDown;
