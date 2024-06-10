import React from "react";
import { Navbar, AuthForm } from "../Components/CompIndex";

const Signup = () => {
  return (
    <>
      <Navbar />
      <AuthForm type={"Sign up"} accountExists={false} />
    </>
  );
};

export default Signup;
