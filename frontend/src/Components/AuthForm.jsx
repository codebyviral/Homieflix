import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Forms.css";
const AuthForm = (props) => {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form className="form">
          <p className="form-title">{props.type} to your account</p>
          <div className="input-container">
            <input type="email" placeholder="Enter email" />
            <span></span>
          </div>
          <div className="input-container mt-3">
            <input type="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="submit mt-4 rounded-pill">
            {props.type}
          </button>

          <p className="signup-link mt-4">
            {props.accountExists ? "No Account?" : "Already have an account?"}
            <a href="">
              {props.accountExists ? (
                <Link to="/signup">Sign up</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
