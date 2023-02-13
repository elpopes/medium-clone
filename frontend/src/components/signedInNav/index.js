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
          <div className="s-nav-logo">
            <Link to="/">
              <img src={require("./logo.png")} alt="Logo" />
            </Link>
          </div>
          <SearchBar />
        </div>
        <div className="spacer"></div>
        <div className="s-nav-links">
          <Link to="/new-story">
            <i className="fa-regular fa-pen-to-square" />
            <span> Write</span>
          </Link>
          <Link to="/">
            <i className="fa-regular fa-bell" />
          </Link>
          <ProfileDropDown />
        </div>
      </div>
    </nav>
  );
};

export default SignedInNav;
