import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import "../signedInNav/signedinNav.css";
import ProfileDropDown from "../ProfileDropDown";

const StoryNav = () => {
  return (
    <nav className="s-nav-wrapper">
      <div className="container">
        <div className="left-side">
          <div className="s-nav-logo">
            <Link to="/">
              <img src={require("../signedInNav/logo.png")} alt="Logo" />
            </Link>
          </div>
          <SearchBar />
        </div>
        <div className="spacer"></div>
        <div className="s-nav-links">
          <Link to="/">
            <i className="fa-regular fa-bell" />
          </Link>
          <ProfileDropDown />
        </div>
      </div>
    </nav>
  );
};

export default StoryNav;
