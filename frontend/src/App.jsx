import {
  Home,
  Signup,
  Login,
  Blog,
  TermsAndConditions,
  Error,
} from "./Pages/PageIndex";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newsroom" element={<Blog />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
