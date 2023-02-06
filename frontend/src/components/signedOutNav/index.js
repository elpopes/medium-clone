import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SignedOutNav.css";

const SignedOutNav = () => {
  const launchModal = () => {};

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <div className="nav-logo">
          <Link to="/">Medium-Earth</Link>
        </div>
        <div className="spacer"></div>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Our Story
          </Link>
          <Link className="nav-link" to="/">
            Fellowship
          </Link>
          <Link className="nav-link" to="/">
            Write
          </Link>
          <Link className="nav-link" to="/">
            Sign In
          </Link>
          <button className="get-started-button" onClick={launchModal}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SignedOutNav;
