import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  ScrollView,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

export const ShoppingCart = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState("");
  setTimeout(() => {
    setIsLoaded(true);
    setText(
      "No matter where you are in your running journey, every run starts with the same thing—a good pair of running shoes. But we know there’s a lot that goes into finding the perfect pair. We’re here to share advice and help you think through your unique running needs so you can confidently lace up. Let’s go!."
    );
  }, 3000);
  return (
    <Box>
      <SafeAreaView>
        <Center w="100%" h="100%">
          <ScrollView w="90%" h="100%">
            <VStack
              pb={8}
              maxWidth="650"
              borderWidth="1"
              space={8}
              overflow="hidden"
              rounded="md"
              _dark={{
                borderColor: "coolGray.500",
              }}
              _light={{
                borderColor: "coolGray.200",
              }}
            >
              <Skeleton h="600" isLoaded={isLoaded}>
                <Image
                  h="650"
                  w="100%"
                  alt="img"
                  source={require("../../../AwesomeProject/assets/img/hustle.png")}
                />
              </Skeleton>
            </VStack>
          </ScrollView>
        </Center>
      </SafeAreaView>
    </Box>
  );
};
