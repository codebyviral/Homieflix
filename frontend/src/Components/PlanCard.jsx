import React, { useState } from "react";
import { DataLoader } from "../Components/CompIndex";
const PlanCard = (props) => {
  return (
    <div className="d-flex justify-content-center flex-row">
      <div
        style={{ width: "23rem", height: "500px" }}
        className="card planCard mx-5 lh-lg mt-5"
      >
        <div className="card-body  fs-6  rounded">
          <div className="text-center nowrap">
            <h5 className="card-title planTitle fs-4 bg-dark text-light rounded mt-3">
              {props.title}
            </h5>
          </div>
          <p className="card-text mt-5">
            <span className="fw-bold fs-1">{props.price}</span> <br />
            Duration: <span className="fw-bold">{props.duration}</span> <br />
            Login: <span className="fw-bold nowrap">{props.loginCount}</span>
            <br /> Video Quality: <span className="fw-bold">4K / UHD</span>{" "}
            <br /> Users: &nbsp;
            <span className="fw-bold">{props.users} </span>
            <br /> Quality: <span className="fw-bold">Best Video Quality</span>
          </p>
          <a href="/"  className="btn buyNowBtn mt-5 rounded-pill text-light">
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
