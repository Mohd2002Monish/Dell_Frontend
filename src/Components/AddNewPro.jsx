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
  Image,
  Box,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Products/Actions";

const InputPopup = () => {
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    product_name: "Dell Inspiron 17 Laptop",
    product_id: "Dell-004",
    description: "A powerful laptop for everyday use",
    img: "data:image/jpeg;base64,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",
    model_number: "INS17-5000",
    service_tag: "ATY56789",
    product_type: "Laptop",
    parts: [
      {
        part_id: Math.random(),
        part_name: "CPU",
        compatibility: "Compatible with Dell XPS 13",
        quantity: "12",
        part_description: "Intel Core i7 Processor",
      },
    ],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addProduct(formData));
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
      <Button onClick={onOpen} colorScheme={"green"}>
        Add New Product +
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{'Add New Products'}</ModalHeader>
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
            <Button onClick={submit} color={"green"}>
              Add+
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InputPopup;
