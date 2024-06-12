import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../Styles/Forms.css";
const AuthForm = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        data-aos="flip-up"
        className="position-absolute top-50 start-50 translate-middle"
      >
        <form className="form">
          <p className="form-title">{props.type}</p>
          {!props.accountExists ? (
            <div className="input-container">
              <input type="text" placeholder="Enter Fullname" />
              <span></span>
            </div>
          ) : null}
          <div className="input-container">
            <input type="email" placeholder="Enter email" />
            <span></span>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Enter password" />
          </div>
          {!props.accountExists ? (
            <div className="input-container">
              <input type="text" placeholder="Enter Phone" />
              <span></span>
            </div>
          ) : null}
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
