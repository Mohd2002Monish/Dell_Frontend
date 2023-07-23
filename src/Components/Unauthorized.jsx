import React from "react";
import { Box, Text, Heading, ChakraProvider } from "@chakra-ui/react";

const UnauthorizedPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading size="xl" mb={5}>
        Unauthorized
      </Heading>
      <Text fontSize="lg">You are not authorized to access this page.</Text>
    </Box>
  );
};

export default UnauthorizedPage;
