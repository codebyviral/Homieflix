import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import toast, { Toaster } from "react-hot-toast";
export const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
    toast.success(`Logged out`);
  }, [LogoutUser]);

  return <Navigate to="/" />;
};
