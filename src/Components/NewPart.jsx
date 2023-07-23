import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../Redux/Products/Actions";
const NewPart = ({ product_id, product_name }) => {
 
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    part_id: "DELL-001-GPU",
    part_name: "Graphics Card",
    part_description: "NVIDIA GeForce GTX 1650",
    compatibility: "Compatible with Dell Inspiron 15",
    quantity: 6,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (product_id, formData) => {
   
    try {
      const response = await axios.post(
        `https://dellassignment.onrender.com/products/${product_id}/addPart`,
        formData
      );
      dispatch(getAllProducts(""));
    } catch (error) {
      console.error("Error adding part:", error);
      throw error;
    }
    dispatch(getAllProducts(""));
    onClose();
  };

  return (
    <>
      <Button color={"green"} onClick={onOpen}>
        Add New Part +
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Part Into {product_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Part ID</FormLabel>
              <Input
                type="text"
                name="part_id"
                value={formData.part_id}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Part Name</FormLabel>
              <Input
                type="text"
                name="part_name"
                value={formData.part_name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Part Description</FormLabel>
              <Input
                type="text"
                name="part_description"
                value={formData.part_description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Compatibility</FormLabel>
              <Input
                type="text"
                name="compatibility"
                value={formData.compatibility}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => handleSubmit(product_id, formData)}
            >
              Add +
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPart;
