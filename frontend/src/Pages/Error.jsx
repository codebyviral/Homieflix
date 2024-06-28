import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/CompIndex";
import ErrorImg from "../assets/error.png";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
        <div className="text-center">
          <img className="errorImg img-fluid" src={ErrorImg} alt="Error" />
        </div>
        <div className="text-center mt-4">
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <h2 className="mt-3">Sorry! Page not Found</h2>
        </div>
        <div className="text-center mt-4">
          <Link to="/">
            <button className="btn btn-primary btn-lg rounded-pill">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
