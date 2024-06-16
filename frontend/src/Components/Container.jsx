import React, { useEffect, useState } from "react";
import AOS from "aos";
import { DataLoader, PlanCard, HomeContainer } from "./CompIndex";
import "aos/dist/aos.css";
import axios from "axios";

const Container = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [plans, setPlans] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("https://homieflix.onrender.com/plans")
      .then((response) => {
        setPlans(response.data);
        setDataLoaded(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Plans API fetch Error: ${error}`);
      });
  }, []);

  return (
    <>
      <HomeContainer />
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className="text-center mt-5"
      >
        <h3>Homieflix Streaming Plans</h3>
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
          <DataLoader />
        )}
      </div>
    </>
  );
};

export default Container;
