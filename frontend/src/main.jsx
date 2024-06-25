import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./Styles/globals.css";
import { AuthProvider } from "./store/auth.jsx";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </AuthProvider>
);
