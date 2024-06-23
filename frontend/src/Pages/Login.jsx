/* eslint-disable no-unused-vars */
import { Navbar } from "../Components/CompIndex";
import { useContext, useState } from "react";
import { passwordHideImg, passwordShowImg } from "./URLs";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { anyError, loginSuccess } from "../Toasts";
import { useAuth } from "../store/auth";
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
  const { storeTokenInLS } = useAuth();
  const [showPassword, setShowPassword] = useState(true);
  const handlePasswordShow = () => {
    setShowPassword((prevValue) => !prevValue);
    if (showPassword == true) {
      document.getElementById("password").type = "text";
    } else {
      document.getElementById("password").type = "password";
    }
  };

  const notify = () => {
    toast.success(loginSuccess.message);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const notifyError = () => toast.error(anyError.message);

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
        const res_data = await response.json();
        console.log(`Response from server ${res_data.token}`);
        storeTokenInLS(res_data.token);
        notify();
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
  return (
    <>
      <Navbar />
      <Toaster />
      <div
        data-aos="flip-up"
        className="position-absolute top-50 start-50 translate-middle aos-init aos-animate"
      >
        <form onSubmit={handleSubmit} className="form">
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
            <p>
              <a href="/signup">Sign up</a>
            </p>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
