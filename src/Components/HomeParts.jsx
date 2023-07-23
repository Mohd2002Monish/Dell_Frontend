import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
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

const HomeParts = ({ part }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleTost = (part) => {
    onClose();
    toast({
      title: "Request Accepted.",
      description: `We've Accept your request for ${part.part_name}.`,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
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
        <Flex>
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
                <ModalHeader>Request For {part.part_name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <p>{part.part_description}</p>
                  <p>
                    <b>Compatibility:</b> {part.compatibility}
                  </p>
                  <p>
                    <b>Quantity:</b>

                    {part.quantity}
                  </p>
                </ModalBody>

                <ModalFooter>
                  <Button
                    onClick={() => handleTost(part)}
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
        </Flex>
      </Box>
    </div>
  );
};
export default HomeParts;
