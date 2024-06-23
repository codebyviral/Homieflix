import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import { DataLoader, PlanCard, HomeContainer } from "./CompIndex";
import "aos/dist/aos.css";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Container = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [plans, setPlans] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/plans")
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
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          className="text-center ce-auto homie-container-2 mt-5"
        >
          <h3
            onClick={() => {
              navigate("/newsroom");
            }}
            className="streamingText"
          >
            Homieflix Streaming Plans
          </h3>
        </div>
        <div
          data-aos="fade-up"
          className="justify-content-center cardFlex d-flex mt-5"
        >
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
              <>
                <Oval color="#fff" height={20} width={20} />
                Processing...
              </>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Container;
