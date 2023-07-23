import "../App.css";
import { Box, Button } from "@chakra-ui/react";
import HomeParts from "./HomeParts";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
const HomeCompo = ({ products }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleTost = (product) => {
    onClose();
    toast({
      title: "Request Accepted.",
      description: `We've Accept your request for ${product.product_name}.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <div>
      <div className="grid">
        <div className="newProduct">
          <SearchBar />
        </div>
        {products.map((product) => (
          <Box key={product.product_id} className="proConatiner">
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
                <p>
                  <b>Parts</b>
                </p>

                {product.parts.map((part) => (
                  <HomeParts key={part.part_id} part={part} />
                ))}
              </div>
            </div>
            <Box>
              <Button onClick={onOpen} color={"green"}>
                Request
              </Button>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Request For {product.product_name}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <p>{product.description}</p>
                    <p>
                      <b>Type</b> {product.product_type}
                    </p>
                    <img src={product.img} />
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      onClick={() => handleTost(product)}
                      colorScheme="green"
                      mr={3}
                    >
                      Make Request
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default HomeCompo;
