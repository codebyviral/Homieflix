/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import { DataLoader, PlanCard, HomeContainer } from "./CompIndex";
import "aos/dist/aos.css";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Container = () => {
  const [plans, setPlans] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dots, setDots] = useState("...");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDots((prev) => (prev.length < 3 ? prev + "." : "."));
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    axios
      .get("https://homieflix.onrender.com/plans")
      .then((response) => {
        setPlans(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log(`Plans API fetch Error: ${error}`);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <HomeContainer />
      <div className="planDivs">
        <div className="text-center ce-auto homie-container-2 mt-5">
          <h3
            onClick={() => {
              navigate("/newsroom");
            }}
            className="streamingText"
          >
            Homieflix Streaming Plans
          </h3>
        </div>
        <div className="justify-content-center cardFlex d-flex mt-5">
          {dataLoaded ? (
            plans.map((plans) => (
              <PlanCard
                key={plans.id}
                razorpayPrice={plans.rzp_price}
                title={plans.title}
                price={plans.price}
                duration={plans.duration}
                loginCount={plans.loginCount}
                users={plans.users}
              />
            ))
          ) : (
            <div className="loader-container">
              <h5 className="ml-2">
                Loading the Best Plans for You
                {dots.split("").map((dot, index) => (
                  <h5 key={index} className={`dot dot-${index + 1}`}>
                    {dot}
                  </h5>
                ))}
              </h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Container;
