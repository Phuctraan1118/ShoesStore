import { Box, Heading, Image, Text, View, ZStack } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import BackGround from "../../../AwesomeProject/assets/img/LoginScreen.png";
import CustomInput from "../CustomInput";

export const SignInScreen = () => {
  return (
    <Box flex={1}>
      <Image
        flex={1}
        size="lg"
        w="full"
        source={require("../../../AwesomeProject/assets/img/hustle.png")}
        alt="BackGround"
        resizeMode="cover"
      />

      <Box
        w="full"
        h="full"
        position="absolute"
        top="20"
        px="6"
        justifyContent="center"
      >
        <Box>
          <CustomInput />
        </Box>
      </Box>
    </Box>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  customInput: {
    color: "red",
    alignItems: "center",
  },
});
