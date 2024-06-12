import React from "react";
import { Navbar, AuthForm } from "../Components/CompIndex";

const Signup = () => {
  return (
    <>
      <Navbar />
      <AuthForm type={"Signup New Account ✨"} accountExists={false} />
    </>
  );
};

export default Signup;
