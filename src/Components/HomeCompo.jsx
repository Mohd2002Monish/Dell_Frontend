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
} from "@chakra-ui/react";
const HomeCompo = ({ products }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div>
      <div className="grid">
        {products.map((product) => (
          <Box
            key={product.product_id}
            to={`product/${product.product_id}`}
            className="proConatiner"
          >
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
            <Box className="productBtn">
              <Button onClick={onOpen} colorScheme={"green"}>Request</Button>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Create your account</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>{/* <Lorem count={2} /> */}</ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                      Save
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
