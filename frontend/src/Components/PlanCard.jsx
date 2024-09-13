import React, { useEffect, useState } from "react";
import homieflixLogo from "../assets/Homieflix.png";
import toast, { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";

const PlanCard = (props) => {
  // Loader useState
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState("...");

  // useEffect(() => {
  //   if (loading) {
  //     const interval = setInterval(() => {
  //       setDots((prev) => (prev.length < 3 ? prev + "." : "."));
  //     }, 500);

  //     return () => clearInterval(interval);
  //   }
  // }, [loading]);

  // Razorpay payment gateway
  const paymentHandler = async (event, razorpayPrice) => {
    setLoading(true);
    event.preventDefault();
    const amount = razorpayPrice;
    const currency = "INR";
    const response = await fetch("https://homieflix.onrender.com/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
      }),
    });
    const order = await response.json();
    console.log(`Order : ${JSON.stringify(order, null, 2)}`);
    var options = {
      key_id: "virallasdm",
      amount: amount,
      currency: "INR",
      name: "Homieflix",
      description: "Test Transaction",
      image: homieflixLogo,
      order_id: order.id,
      handler: function (response) {
        alert(`Payment Successful Enjoy! 🎉`);
      },
      prefill: {
        name: "Homieflix User",
        email: "homieflix@homie.com",
        contact: "9426995196",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(`Payment Failed! 😞`);
      const {
        code,
        description,
        source,
        step,
        reason,
        metadata: { order_id, payment_id },
      } = response.error;
      const payError = [
        code,
        description,
        source,
        step,
        reason,
        order_id,
        payment_id,
      ];
      console.log(payError);
    });
    rzp1.open();
    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center flex-row">
      <div
        style={{ width: "23rem", height: "500px" }}
        className="card planCard mx-5 lh-lg mt-5"
      >
        <Toaster />
        <div className="card-body fs-6 rounded">
          <div className="text-center nowrap">
            <h5 className="card-title planTitle fs-4 bg-dark text-light rounded mt-3">
              {props.title}
            </h5>
          </div>
          <p className="card-text mt-5">
            <span className="fw-bold fs-1">{`₹${props.price}`}</span>
            <br />
            Duration: <span className="fw-bold">{props.duration}</span> <br />
            Login: <span className="fw-bold nowrap">{props.loginCount}</span>
            <br /> Video Quality: <span className="fw-bold">4K / UHD</span>{" "}
            <br /> Users: &nbsp;
            <span className="fw-bold">{props.users} </span>
            <br /> Quality: <span className="fw-bold">Best Video Quality</span>
          </p>
          <button
            id={`plan${props.price}`}
            onClick={(event) => {
              paymentHandler(event, props.razorpayPrice);
            }}
            className="btn homie-anime loading-btn text-center buyNowBtn mt-5 rounded-pill text-light"
          >
            {loading ? (
              <>
                <Oval color="#fff" height={20} width={20} />
                <span className="ml-2">
                  Processing
                  {dots.split("").map((dot, index) => (
                    <span key={index} className={`dot dot-${index + 1}`}>
                      {dot}
                    </span>
                  ))}
                </span>
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
