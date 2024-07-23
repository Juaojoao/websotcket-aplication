import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
