import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAllProducts } from "./Redux/Products/Actions";

import AllRoutes from "./Routes/AllRoutes.jsx";

function App() {
  const store = useSelector((el) => {
    return el;
  });
  console.log(store);
  return (
    <div>
      <AllRoutes />
    </div>
  );
}

export default App;
