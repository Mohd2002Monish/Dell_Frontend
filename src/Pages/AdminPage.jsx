import { Box } from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/progress";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import { getAllProducts } from "../Redux/Products/Actions";

function AdminPage() {
  const { data, AllProducts } = useSelector((store) => {
    return store.products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  
  return (
    <div>
      <Navbar />
      {AllProducts.loading ? (
        <Box display={'flex'} justifyContent={'center'}>
          <CircularProgress isIndeterminate color="blue.400" />
        </Box>
      ) : (
        <ProductList products={data} />
      )}
    </div>
  );
}

export default AdminPage;
