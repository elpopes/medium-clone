import React, { useState, useEffect } from "react";
import UserAvatar from "../Avatar/UserAvatar";
import "./ProfileDropDown.css";
import SignOutButton from "../SignOutButton";
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
  const [showDropDown, setShowDropDown] = useState(false);

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
    <div className="profile-dropdown" onClick={toggleDropDown}>
      <UserAvatar />
      <div className="profile-dropdown-toggle">
        <i className="fa fa-chevron-down" />
      </div>
      {showDropDown && (
        <ul
          className="profile-dropdown-menu"
          style={{ display: showDropDown ? "block" : "none" }}
        >
          <div className="navigation">
            <li>
              <i className="fa-regular fa-user"></i>
              <span>Profile</span>
            </li>
            <li>
              <i className="fa-regular fa-bookmark"></i>
              <span>Lists</span>
            </li>
            <li>
              <Link className="dropdown-links" to="/me-stories">
                <i className="fa-regular fa-file-lines"></i>
                <span>Stories</span>
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-chart-line"></i>
              <span>Stats</span>
            </li>
          </div>
          <div className="settings">
            <Link className="dropdown-links" to="/me-account">
              <li>Settings</li>
            </Link>
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
