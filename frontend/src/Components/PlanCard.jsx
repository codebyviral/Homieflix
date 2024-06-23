import React, { useState } from "react";
import { DataLoader } from "../Components/CompIndex";
import homieflixLogo from "../assets/Homieflix.png";
import { Oval } from "react-loader-spinner";
const PlanCard = (props) => {
  // Loader useState
  const [loading, setLoading] = useState(false);

  // Razorpay payment gateway
  const paymentHandler = async (event, razorpayPrice) => {
    setLoading(true);
    event.preventDefault();
    const amount = razorpayPrice;
    const currency = "INR";
    const response = await fetch("http://localhost:4000/order", {
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
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
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
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
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
        <div className="card-body  fs-6  rounded">
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
              <Oval color="#fff" height={20} width={20} />
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
