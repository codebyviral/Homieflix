import React from "react";
import logo from "../assets/Homieflix.png";
import { Link } from "react-router-dom";
import hamburgerMenu from "../assets/icons8-hamburger-menu-100.png";
const Navbar = () => {
  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} alt="" className="logo" />
          <a className="navbar-brand text-white " href="/">
            Homieflix
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  Dropdown
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
              <Link to="/signup">
                <li className=" linkItem signLink ce-auto">
                  <button className="btn navBtn  btn-light fw-medium rounded-pill">
                    Sign up
                  </button>
                </li>
              </Link>
              <Link to="/login">
                <li className="ce-auto linkItem">
                  <button className="btn navBtn  btn-light fw-medium rounded-pill">
                    Log in
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
