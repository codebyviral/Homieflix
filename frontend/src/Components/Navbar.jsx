/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { textLogo, hamburgerMenu } from "../Pages/URLs";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedin } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <img src={logo}alt=""className="logo"/> */}
          <div className="navbar-brand text-center" href="/">
            <img
              onClick={() => {
                navigate("/");
              }}
              className="textLogo ce-auto"
              src={textLogo}
              alt="  "
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-ico">
              <img className="hamImg" src={hamburgerMenu} alt="" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav homie_nav_items me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item text-white dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              {/* <Link to="/signup">
                <li className=" linkItem signLink ce-auto">
                  <button className="bg-homie navBtn  fw-medium rounded">
                    Sign up
                  </button>
                </li>
              </Link> */}
              {isLoggedin ? (
                <>
                  <Link to="/logout">
                    <li className="ce-auto linkItem">
                      <button className="navBtn bg-homie signIn fw-medium rounded">
                        Sign out
                      </button>
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <li className="ce-auto linkItem">
                      <button className="navBtn bg-homie signIn fw-medium rounded">
                        Log in
                      </button>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {isLoggedin ? (
        <>
          <div className="mobileSingIn">
            <Link to="/login">
              <li className="ce-auto linkItem">
                <button className="navBtn bg-homie signIn fw-medium rounded">
                  Sign out
                </button>
              </li>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="mobileSingIn">
            <Link to="/login">
              <li className="ce-auto linkItem">
                <button className="navBtn bg-homie signIn fw-medium rounded">
                  Sign in
                </button>
              </li>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
