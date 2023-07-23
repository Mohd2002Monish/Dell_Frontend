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
const Parts = ({ part }) => {
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
          <Button colorScheme={"red"}>Delete</Button>
        </Flex>
      </Box>
    </div>
  );
};
export default Parts;
