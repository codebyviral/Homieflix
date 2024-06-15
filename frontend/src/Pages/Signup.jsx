import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { Navbar, Toast } from "../Components/CompIndex";

const Signup = () => {
  const registerURL = "https://homieflix.onrender.com/api/auth/register";

  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    Phone: "",
  });
  const [loading, setLoading] = useState(false);
  // handling the input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const notify = () => toast.success("Account Created");
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(registerURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    },);
      if (response.ok) {
        const res_data = await response.json();
        console.log(`res from server : ${res_data}`);
        // storeTokenInLS(response);
        notify();
        setUser({ username: "", email: "", phone: "", password: "" });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <Toaster />
      <div
        data-aos="flip-up"
        className="position-absolute top-50 start-50 translate-middle aos-init aos-animate"
      >
        <form onSubmit={handleSubmit} className="form">
          <p className="form-title">Signup New Account ✨</p>
          <div className="input-container">
            <input
              name="username"
              required
              id="username"
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
              type="text"
              placeholder="Enter username"
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              name="email"
              required
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              type="email"
              placeholder="Enter email"
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              name="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="input-container">
            <input
              name="Phone"
              required
              autoComplete="off"
              onChange={handleInput}
              type="number"
              placeholder="Enter Phone"
            />
            <span></span>
          </div>
          <div className="rounded mt-3 mx-2 tooltip_custom d-flex">
            <input checked className="mx-1" type="checkbox" />
            <div className="mx-2 mt-3">
              By clicking signup you agree our
              <Link to="/termsAndConditions">Terms and Conditions</Link>
            </div>
          </div>
          <button
            type="submit"
            className="submit mt-4 rounded-pill"
            disabled={loading}
          >
            {loading ? (
              <div className="loader-container">
                <Oval color="#fff" height={20} width={20} />
              </div>
            ) : (
              "Signup New Account ✨"
            )}
          </button>
          <p className="signup-link mt-4">
            Already have an account?
            <a href="">
              <a href="/login">Login</a>
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
