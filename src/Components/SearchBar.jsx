import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../Redux/Products/Actions";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(getAllProducts(searchTerm));
  };
  return (
    <>
      {" "}
      <Box w={"70%"}>
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
    </>
  );
}

export default SearchBar;
