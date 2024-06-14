import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/CompIndex";
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="text-center fs-1">
        404
        <h2>Sorry! Page not Found</h2>
      </div>
      <div className="text-white text-center">
        <Link to="/">
          <button className="btn mt-5 btn-light rounded-pill">return to home</button>
        </Link>
      </div>
    </>
  );
};

export default Error;
