import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Auth/Actions";
import { Link, useNavigate } from "react-router-dom";
export default function SimpleCard() {
  const {  loading } = useSelector((store) => {
    return store.auth;
  });
  const navi = useNavigate();
  const [Info, setInfo] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInfo({
      ...Info,
      [event.target.name]: event.target.value,
    });
  };
  const submit = async () => {
    await dispatch(login({ email: Info.email, pass: Info.password }));
    if (!loading) {
      navi("/loading");
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack w={"500px"} spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                onChange={handleChange}
                placeholder="Password"
                type="password"
              />
            </FormControl>
            {false ? (
              <Center>
                <Text color={"red"}>Password is incorrect</Text>
              </Center>
            ) : null}
            <Stack spacing={10}>
              <Button
                isLoading={loading}
                onClick={submit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Box display={"flex"} gap={"6px"}>
              <Text>Don't Have Account </Text>
              <Link to="/signup">
                <Text color={"blue.400"}>
                  {" "}
                  <b>Create One</b>
                </Text>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
