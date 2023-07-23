import { CircularProgress } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Loading() {
  const data = useSelector((store) => {
    return store.auth;
  });
  console.log(data.user);

  const navi = useNavigate();
  useEffect(() => {
    if (data.user == "Admin") {
      navi("/admin");
    } else {
      navi("/");
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress isIndeterminate color="blue.400" />
    </div>
  );
}

export default Loading;
