import React from "react";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
const Banner = () => {
  return (
    <div className="homie-banner">
      <div className="text-center labelText position-absolute">
        <h1 className="bannerText">Unlimited movies, TV shows and more</h1>
        <div className="text-center mx-auto">
          <h3 className="captionText">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>
        <div className="email-container">
          <form className="email-form">
            <input
              type="email"
              className="email-input"
              placeholder="Email address"
            />
            <button
              onClick={() => {
                navigate("/signup");
              }}
              type="submit"
              className="email-button"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
