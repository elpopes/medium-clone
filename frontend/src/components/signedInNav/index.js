import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./signedinNav.css";
import ProfileDropDown from "../ProfileDropDown";

const SignedInNav = () => {
  return (
    <nav className="s-nav-wrapper">
      <div className="container">
        <div className="left-side">
          <div className="nav-logo">
            <Link to="/">Medium-Earth</Link>
          </div>
          <SearchBar />
        </div>
        <div className="spacer"></div>
        <div className="s-nav-links">
          <Link to="/">Write</Link>
          <Link to="/">Notifications</Link>
          <ProfileDropDown />
        </div>
      </div>
    </nav>
  );
};

export default SignedInNav;
