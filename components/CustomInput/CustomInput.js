import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function CustomInput() {
  return (
    <Center w="100%">
      <Box safeArea p="2" pt="40" py="8" w="90%" maxW="290">
        <Heading
          size="xl"
          fontWeight="400"
          color="white"
          _dark={{
            color: "warmGray.50",
          }}
          textAlign="center"
        >
          Welcome back,
        </Heading>
        {/* <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading> */}

        <VStack space={3} mt="5">
          <FormControl color={styles.input}>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              _light={{
                bg: "#e8c789",
                _hover: {
                  bg: "#e8c789",
                },
                _focus: {
                  bg: "#a38a5a",
                },
              }}
              _dark={{
                bg: "#e8c789",
                _hover: {
                  bg: "#e8c789",
                },
                _focus: {
                  bg: "#a38a5a",
                },
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              _light={{
                bg: "#e8c789",
                _hover: {
                  bg: "#e8c789",
                },
                _focus: {
                  bg: "#a38a5a",
                },
              }}
              _dark={{
                bg: "coolGray.800",
                _hover: {
                  bg: "coolGray.900",
                },
                _focus: {
                  bg: "#a38a5a",
                },
              }}
            />
            <Link
              _text={{
                fontSize: "lg",
                fontWeight: "500",
                color: "#cbaa6a",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="yellow">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="lg"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "#cbaa6a",
                fontWeight: "medium",
                fontSize: "lg",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
const styles = StyleSheet.create({
  input: {
    color: "#cbaa6a",
    backgroundColor: "#cbaa6a",
  },
});
