import Parts from "./Parts";
import "../App.css";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import AddNewPro from "../Components/AddNewPro";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/Products/Actions";
import Editbtn from "./Editbtn";
import { useState } from "react";
const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Pass the search term to the parent component or perform any search logic here
    // onSearch(searchTerm);
  };
  const dispatch = useDispatch();
  const handleDelete = (product) => {
    dispatch(deleteProduct(product._id));
  };
  return (
    <div>
      <div className="newProduct">
        <Box w={"70%"} >
          <InputGroup>
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputRightElement>
              <IconButton
                icon={<SearchIcon />}
                size="sm"
                variant="ghost"
                onClick={handleSearch}
                aria-label="Search"
              />
            </InputRightElement>
          </InputGroup>{" "}
        </Box>
        <AddNewPro />
      </div>
      <div className="grid">
        {products.map((product) => (
          <div key={product.product_id} className="proConatiner">
            <div key={product.product_id} className="product">
              <div className="productImg">
                {" "}
                <img src={product.img} alt="" className="product-image" />
              </div>
              <div className="productDetails">
                <div>
                  <h2 className="productName">{product.product_name}</h2>
                  <p>
                    <b>Type:</b> {product.product_type}
                  </p>
                  <p>
                    <b>Model Number:</b> {product.model_number}
                  </p>
                  <p>
                    <b>Service Tag:</b> {product.service_tag}
                  </p>
                  <p>
                    <b>Description:</b> {product.description}
                  </p>
                </div>
              </div>

              <div className="partsContainer ">
                <Box
                  display={"flex"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                  padding={"20px"}
                >
                  <b>Parts</b> <Button color={"green"}>Add New Parts +</Button>
                </Box>

                {product.parts.map((part) => (
                  <Parts key={part.part_id} part={part} />
                ))}
              </div>
            </div>
            <Box className="productBtn">
              <Button onClick={() => handleDelete(product)} colorScheme={"red"}>
                Delete Product
              </Button>
              <Editbtn product={product} />
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
