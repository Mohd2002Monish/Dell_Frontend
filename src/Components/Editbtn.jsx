import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../Redux/Products/Actions";

const Editbtn = ({ product }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(product);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    
    dispatch(updateProduct(product._id, formData));
    onClose();
  };
  const handlePartInputChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedParts = [...prevFormData.parts];
      updatedParts[index] = {
        ...updatedParts[index],
        [name]: value,
      };
      return {
        ...prevFormData,
        parts: updatedParts,
      };
    });
  };
  return (
    <>
      <Button onClick={onOpen} colorScheme={"blue"}>
        Update Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{"Update Product Information"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>
              <Input
                placeholder="Product Name"
                name="product_name"
                value={formData.product_name}
                onChange={handleInputChange}
                mb={4}
              />
              <Input
                placeholder="Product ID"
                name="product_id"
                value={formData.product_id}
                onChange={handleInputChange}
                mb={4}
              />
              <Textarea
                placeholder="Product Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                mb={4}
              />
              <Input
                placeholder="Picture URL"
                name="img"
                value={formData.img}
                onChange={handleInputChange}
                mb={4}
              />
              {formData.img && (
                <img width={"100px"} src={formData.img} alt="Product" mb={4} />
              )}
              <Input
                placeholder="Model Number"
                name="model_number"
                value={formData.model_number}
                onChange={handleInputChange}
                mb={4}
              />
              <Input
                placeholder="Product Type"
                name="product_type"
                value={formData.product_type}
                onChange={handleInputChange}
                mb={4}
              />
              <Input
                placeholder="Service Tag"
                name="serviceTag"
                value={formData.service_tag}
                onChange={handleInputChange}
                mb={4}
              />
              {formData.parts.map((part, index) => (
                <div key={index}>
                  <Input
                    placeholder="Part Name"
                    name="part_name"
                    value={part.part_name}
                    onChange={(e) => handlePartInputChange(index, e)}
                    mb={4}
                  />
                  <Input
                    placeholder="Part Compatibility"
                    name="compatibility"
                    value={part.compatibility}
                    onChange={(e) => handlePartInputChange(index, e)}
                    mb={4}
                  />
                  <Input
                    placeholder="Part Quantity"
                    name="quantity"
                    value={part.quantity}
                    onChange={(e) => handlePartInputChange(index, e)}
                    mb={4}
                  />
                  <Textarea
                    placeholder="Part Description"
                    name="part_description"
                    value={part.part_description}
                    onChange={(e) => handlePartInputChange(index, e)}
                    mb={4}
                  />
                </div>
              ))}
            </Box>
          </ModalBody>

          <ModalFooter display="flex" gap="40px">
            <Button onClick={submit} colorScheme={"green"}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Editbtn;
