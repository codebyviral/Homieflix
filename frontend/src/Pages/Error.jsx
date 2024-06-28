import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/CompIndex";
import ErrorImg from "../assets/error.png";
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="text-center">
          <img className="errorImg" src={ErrorImg} alt="" />
        </div>
        <div className="text-center  fs-1">
          404
          <h2 className="">Sorry! Page not Found</h2>
        </div>
        <div className="text-white text-center">
          <Link to="/">
            <button className="btn mt-5 btn-light rounded-pill">
              return to home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
