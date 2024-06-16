import React, { useState } from "react";
import { Navbar } from "../Components/CompIndex";
import { useNavigate } from "react-router-dom";
import passwordHideImg from "../assets/icons8-hide-90.png";
import passwordShowImg from "../assets/icons8-eye-90.png";
import toast, { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { anyError, loginSuccess } from "../Toasts";
const Login = () => {
  const loginURL = "https://homieflix.onrender.com/login";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();
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

  const notify = () => toast.success(loginSuccess);
  const notifyError = () => toast.error(anyError);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    document.getElementById("password").type = "password";
    try {
      const response = await fetch(loginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser({ email: "", password: "" });
        notify();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        await notifyError();
      }
    } catch (error) {
      if (error) {
        setLoading(false);
        await notifyError();
      }
    }
  };
  const submit = (e) => {
    handleSubmit(e);
  };
  return (
    <>
      <Navbar />
      <Toaster />
      <div
        data-aos="flip-up"
        className="position-absolute top-50 start-50 translate-middle aos-init aos-animate"
      >
        <form onSubmit={submit} className="form">
          <p className="form-title">Login to your Account ✨</p>
          <div className="input-container">
            <input
              name="email"
              id="email"
              required
              value={user.email}
              autoComplete="off"
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
            />
            <span></span>
          </div>
          <div className="input-container passwordDiv">
            <input
              name="password"
              id="password"
              required
              value={user.password}
              autoComplete="off"
              onChange={handleChange}
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
          <button type="submit" className="submit mt-4 rounded-pill">
            {loading ? (
              <div className="loader-container">
                <Oval color="#fff" height={20} width={20} />
              </div>
            ) : (
              "Login to your Account ✨"
            )}
          </button>
          <p className="signup-link mt-4">
            No Account?
            <a href="">
              <a href="/signup">Sign up</a>
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
