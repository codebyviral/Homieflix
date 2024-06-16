import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
const Banner = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("email", document.getElementById("email").value);
      navigate("/signup");
    }, 1000);
  };
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
              required
              id="email"
              type="email"
              className="email-input"
              placeholder="Email address"
            />
            <button
              onClick={handleEmail}
              type="submit"
              className="email-button loading-btn"
            >
              {loading ? (
                <Oval color="#fff" height={20} width={20} />
              ) : (
                "Get Started"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
