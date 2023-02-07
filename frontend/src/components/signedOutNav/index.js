import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import "./SignedOutNav.css";
import LoginButton from "../LogInButton";
import LoginForm from "../LoginFormModel/LoginForm";

const SignedOutNav = () => {
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
          <LoginButton></LoginButton>
          <button className="get-started-button" onClick={LoginForm}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SignedOutNav;
