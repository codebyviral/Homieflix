/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { textLogo, hamburgerMenu } from "../Pages/URLs";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedin } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg bg-dark"> {/* Changed to bg-dark for better contrast */}
        <div className="container-fluid">
          {/* Logo */}
          <div className="navbar-brand text-center" onClick={() => navigate("/")}>
            <img className="textLogo ce-auto" src={textLogo} alt="Logo" />
          </div>

          {/* Mobile menu button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img className="hamImg" src={hamburgerMenu} alt="Menu" />
            </span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav homie_nav_items me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About Us {/* Ensure this link points to /about */}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">Another action</a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="/">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Sign-in/Sign-out */}
            <ul className="navbar-nav">
              {isLoggedin ? (
                <Link to="/logout">
                  <li className="ce-auto linkItem">
                    <button className="navBtn nowrap bg-homie signIn fw-medium rounded">
                      Sign out
                    </button>
                  </li>
                </Link>
              ) : (
                <Link to="/login">
                  <li className="ce-auto linkItem">
                    <button className="navBtn nowrap bg-homie signIn fw-medium rounded">
                      Sign in
                    </button>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile sign-in/sign-out */}
      {isLoggedin ? (
        <div className="mobileSingIn">
          <Link to="/logout">
            <li className="ce-auto linkItem">
              <button className="navBtn nowrap bg-homie signIn fw-medium rounded">
                Sign out
              </button>
            </li>
          </Link>
        </div>
      ) : (
        <div className="mobileSingIn">
          <Link to="/login">
            <li className="ce-auto linkItem">
              <button className="navBtn nowrap bg-homie signIn fw-medium rounded">
                Sign in
              </button>
            </li>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
