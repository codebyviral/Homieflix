import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { Navbar } from "../Components/CompIndex";
import passwordHideImg from "../assets/icons8-hide-90.png";
import passwordShowImg from "../assets/icons8-eye-90.png";
import { useAuth } from "../store/auth";

const Signup = () => {
  const registerURL = "https://homieflix.onrender.com/register";

  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    Phone: "",
  });

  const { storeTokenInLS } = useAuth();

  // Fetch email from homepage is user entered email exists

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setUser((prevUser) => ({
        ...prevUser,
        email: savedEmail,
      }));
    }
  }, []);

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
  const notifyError = () => toast.error("Something Went Wrong");

  const [showPassword, setShowPassword] = useState(true);

  const handlePasswordShow = () => {
    setShowPassword((prevValue) => !prevValue);
    console.log(showPassword);
    if (showPassword == true) {
      document.getElementById("password").type = "text";
    } else {
      document.getElementById("password").type = "password";
    }
  };

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
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(`res from server : ${res_data}`);
        storeTokenInLS(res_data.token);
        notify();
        setUser({ username: "", email: "", phone: "", password: "" });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        notifyError();
        setLoading(false);
      }
    } catch (error) {
      notifyError();
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <Toaster />
      <div
        data-aos="flip-up"
        className="position-absolute signUpContainer top-50 start-50 translate-middle aos-init aos-animate"
      >
        <form onSubmit={handleSubmit} className="form signUpForm">
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
              id="password"
              name="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
              type="password"
              placeholder="Enter password"
            />
            <img
              onClick={handlePasswordShow}
              className="passImg"
              src={showPassword ? passwordHideImg : passwordShowImg}
              alt="password eye "
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

          <button
            type="submit"
            className="submit mt-4 rounded-pill"
            disabled={loading}
          >
            {loading ? (
              <div className="loader-container">
                <>
                  <Oval color="#fff" height={20} width={20} />
                  Processing...
                </>
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
