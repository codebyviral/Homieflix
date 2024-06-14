import "../Styles/Notify.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import crossIcon from "../assets/icons8-cross-100.png";
import { Link } from "react-router-dom";
const Toast = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const hideToast = () => {
    const message = document.getElementById("toastMessage");
    message.style.display = "none";
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="700"
      id="toastMessage"
      className="text-center"
    >
      <div className="notify d-flex bg-dark text-center text-white fs-6 rounded position-absolute top-0 start-50 translate-middle">
        {props.message}
        <Link to={props.redirectTo}>
          <img
            className="crossIcon mx-1"
            src={crossIcon}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Toast;
