import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Loading from "../Components/Loading";
// import AdminRoute from "../Components/AdminRoute";
import PrivateRoutes from "../Components/PrivateRoute";
import AdminPage from "../Pages/AdminPage";
import Homepage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateRoutes>
              <AdminPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Homepage />
            </PrivateRoutes>
          }
        />
        <Route path="/loading" element={<Loading />} />{" "}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<>King</>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
