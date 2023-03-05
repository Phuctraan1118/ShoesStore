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
import ItemsListSpotlight from "./SpotlightLoading";

export const LoadingSkeleton = () => {
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
      {/* <Center pl={0}>
        <AppBarHeader />
      </Center> */}
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
            <Divider
              my="10"
              _light={{
                bg: "muted.800",
              }}
              _dark={{
                bg: "muted.50",
              }}
            />
            <Center pb={8}>
              <Heading>FEEL IT TO BELIEVE IT</Heading>
            </Center>
            <Divider
              my="2"
              _light={{
                bg: "muted.800",
              }}
              _dark={{
                bg: "muted.50",
              }}
            />
            <Heading pt={4} pb={4}>
              Featured
            </Heading>
            <VStack
              pb={8}
              maxWidth="400"
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
              <Skeleton h="40" isLoaded={isLoaded}>
                <Image
                  h="40"
                  alt="img"
                  source={{
                    uri: "https://static.nike.com/a/images/w_960,c_limit/7922e533-ac85-4a30-93bb-3f80e6754304/running-shoe-finder-dual-gender.jpg",
                  }}
                />
              </Skeleton>
              <Skeleton.Text lines={4} px="4" isLoaded={isLoaded}>
                <Text px="4" fontSize={"md"} lineHeight={"20px"}>
                  {text}
                </Text>
              </Skeleton.Text>
              <Skeleton
                px="4"
                mb="4"
                rounded="md"
                startColor="primary.100"
                isLoaded={isLoaded}
              >
                <Button m="4">More</Button>
              </Skeleton>
            </VStack>
            <VStack
              maxWidth="400"
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
              <Skeleton h="40" isLoaded={isLoaded}>
                <Image
                  h="40"
                  alt="img"
                  source={{
                    uri: "https://static.nike.com/a/images/w_960,c_limit/7922e533-ac85-4a30-93bb-3f80e6754304/running-shoe-finder-dual-gender.jpg",
                  }}
                />
              </Skeleton>
              <Skeleton.Text lines={4} px="4" isLoaded={isLoaded}>
                <Text px="4" fontSize={"md"} lineHeight={"20px"}>
                  {text}
                </Text>
              </Skeleton.Text>
              <Skeleton
                px="4"
                mb="4"
                rounded="md"
                startColor="primary.100"
                isLoaded={isLoaded}
              >
                <Button m="4">More</Button>
              </Skeleton>
            </VStack>
            <Divider
              my="2"
              _light={{
                bg: "muted.800",
              }}
              _dark={{
                bg: "muted.50",
              }}
            />
            <Heading pt={4} pb={4}>
              In The Spotlight
            </Heading>
            {/* In the Spotlight */}
            {/* <HStack space={3} justifyContent="center">
            <ScrollView horizontal={true}>
              <Center
                h="40"
                mr={7}
                w="20"
                bg="primary.300"
                rounded="md"
                shadow={3}
              />
              <Center
                h="40"
                mr={7}
                w="20"
                bg="primary.500"
                rounded="md"
                shadow={3}
              />
            </ScrollView>
          </HStack> */}
            <ItemsListSpotlight />
            {/* In the Spotlight */}
          </ScrollView>
        </Center>
      </SafeAreaView>
    </Box>
  );
};
