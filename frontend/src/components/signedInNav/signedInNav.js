import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

const SignedInNav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <div className="left-side">
          <div className="nav-logo">
            <Link to="/">Medium-Earth</Link>
          </div>
          <SearchBar />
        </div>
        <div className="spacer"></div>
        <div className="nav-links">
          <Link to="/">Write</Link>
          <Link to="/">Notifications</Link>
          <Link to="/">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default SignedInNav;
