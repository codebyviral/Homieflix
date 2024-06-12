import React, { useEffect, useState } from "react";
import AOS from "aos";
import {DataLoader, PlanCard} from "./CompIndex"
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
      .get("http://localhost:4000/plans")
      .then((response) => {
        setPlans(response.data);
        setDataLoaded(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Axios error: ${error}`);
      });
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        className="text-center mt-5"
      >
        <h3>Homieflix Streaming Plans</h3>
      </div>
      <div data-aos="fade-up" className="justify-content-center d-flex mt-5">
        {dataLoaded ? (
          plans.map((plans) => (
            <PlanCard
              key={plans.id}
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
