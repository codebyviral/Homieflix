import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { Toaster, toast } from "react-hot-toast";
import { emptyEmail } from "../Toasts";
const Banner = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const fillEmailToast = () => {
    toast.error(emptyEmail.message);
    setLoading(false);
  };
  
  const handleEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    const newEmail = document.getElementById("email").value;
    if (newEmail == "" || newEmail == null) {
      fillEmailToast();
    } else {
      localStorage.setItem("email", newEmail);
      navigate("/signup");
    }
  };
  return (
    <div className="homie-banner">
      <Toaster />
      <div className="text-center labelText position-absolute">
        <h1 className="bannerText">Unlimited movies, TV shows and more</h1>
        <div className="text-center mx-auto">
          <div className="captionText d-center mt-3 fs-24">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="spanCaption d-center">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
        </div>
        <div className="email-container">
          <form className="email-form">
            <input
              required
              id="email"
              type="email"
              className="email-input rounded-start"
              placeholder="Email address"
            />
            <button
              onClick={handleEmail}
              type="submit"
              className="email-button rounded-end loading-btn"
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
