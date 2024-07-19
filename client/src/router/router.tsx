import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login-register/loginAndRegister";
import { HomePage } from "../pages/home";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
