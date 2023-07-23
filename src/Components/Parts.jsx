import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../Redux/Products/Actions";
const Parts = ({ part, productId }) => {
  const dispatch = useDispatch();
  const removePart = async () => {
    try {
      const response = await axios.post(
        `https://dellassignment.onrender.com/products/${productId}/removePart/${part.part_id}`
      );
     
      dispatch(getAllProducts(""));
    } catch (error) {
      console.error("Error removing part:", error);
      throw error;
    }
  };
  return (
    <div>
      <Box className="partBox">
        <Accordion allowToggle className="partAcc">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {part.part_name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>{part.part_description}</p>
              <p>
                <b>Compatibility:</b> {part.compatibility}
              </p>
              <p>
                <b>Quantity:</b>

                {part.quantity}
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Flex gap={"10px"}>
          <Button
            onClick={() => removePart(part, productId)}
            colorScheme={"red"}
          >
            Delete
          </Button>
        </Flex>
      </Box>
    </div>
  );
};
export default Parts;
