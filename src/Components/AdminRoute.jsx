import React, { Children } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminRoute({ children }) {

  const { role } = useSelector((store) => {
    return store.auth;
  });
    console.log()

  if (role == "Admin") return <>{children}</>;
  else {
    return;
  }
}

export default AdminRoute;
