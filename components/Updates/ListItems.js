import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  PresenceTransition,
  ScrollView,
  VStack,
} from "native-base";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Img1 from "../../../AwesomeProject/assets/img/1.png";
import Img2 from "../../../AwesomeProject/assets/img/2.png";
import Img3 from "../../../AwesomeProject/assets/img/3.png";
import SearchFilter from "./SearchFilter";
import products from "../../data/products";
import { useSelector } from "react-redux";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     name: "Air Jordan 1 Mid",
//     img: Img1,
//     price: "3,669,000 VND",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
//     img: Img2,
//     name: "Nike Air Max 270 ",
//     price: "4,699,000 VND",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
//     img: Img3,
//     name: "Air Jordan XXXVII PF",
//     price: "5,439,000 VND",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
//     img: Img2,
//     name: "Air Jordan XXXVII PF",
//     price: "5,439,000 VND",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28be",
//     img: Img2,
//     name: "Air Jordan XXXVII PF",
//     price: "5,439,000 VND",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bf",
//     img: Img2,
//     name: "Air Jordan XXXVII PF",
//     price: "5,439,000 VND",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bg",
//     img: Img2,
//     name: "Air Jordan XXXVII PF",
//     price: "5,439,000 VND",
//   },
// ];

const ItemsList = (navigation) => {
  const [selectedId, setSelectedId] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [input, setInput] = useState("");
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
  const [isOpen, setIsOpen] = React.useState(false);
  const products = useSelector((state) => state.products.products);
  return (
    <SafeAreaView style={styles.container}>
      <Box w="100%" h="8%">
        <VStack space={1} alignItems="self-start">
          <Heading fontSize="lg">Welcom to my store!!!</Heading>
          <Heading fontSize="lg">Have a nice day.</Heading>
        </VStack>
      </Box>
      <Box h="72%">
        <VStack w="full" alignSelf="center">
          <HStack space={5}>
            <Box mt="25px">
              <Button
                style={styles.btn}
                w="30px"
                h="30px"
                onPress={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <Icon
                    alignItems="center"
                    m="2"
                    ml="2"
                    size="6"
                    color="gray.400"
                    as={<MaterialIcons name="close" />}
                  />
                ) : (
                  <Icon
                    alignItems="center"
                    m="2"
                    ml="2"
                    size="6"
                    color="gray.400"
                    as={<MaterialIcons name="search" />}
                  />
                )}
              </Button>
            </Box>
            <Box w="80%">
              <PresenceTransition
                visible={isOpen}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 250,
                  },
                }}
              >
                <Center w="full" mt="5" bg="white" rounded="md">
                  <Input
                    placeholder="Search People & Places"
                    width="100%"
                    height="40px"
                    borderRadius="5"
                    py="1"
                    px="1"
                    fontSize="15"
                    borderColor="#a39e9e"
                    fontWeight={700}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    InputLeftElement={
                      <Icon
                        m="2"
                        ml="3"
                        size="6"
                        color="gray.400"
                        as={<MaterialIcons name="search" />}
                      />
                    }
                  />
                </Center>
              </PresenceTransition>
            </Box>
          </HStack>
          <Center h="full" w="full" shadow={6}>
            <SearchFilter data={products} input={input} setInput={setInput} />
          </Center>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 50,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 90,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
  },
  price: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  tinyLogo: {
    width: 250,
    height: 300,
    alignContent: "flex-start",
  },
  getNow: {
    backgroundColor: "#696565",
  },
  btn: {
    backgroundColor: "#696565",
  },
});

export default ItemsList;
