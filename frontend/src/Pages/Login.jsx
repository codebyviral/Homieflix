import React from "react";
import { Navbar, AuthForm } from "../Components/CompIndex";
const Login = () => {
  return (
    <>
      <Navbar />
      <AuthForm type={"Login"} accountExists={true} />
    </>
  );
};

export default Login;
