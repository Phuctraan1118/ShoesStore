import { Box, Button, Center, Link } from "native-base";
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
import Img1 from "../../../AwesomeProject/assets/img/1.png";
import Img2 from "../../../AwesomeProject/assets/img/2.png";
import Img3 from "../../../AwesomeProject/assets/img/3.png";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Air Jordan 1 Mid",
    img: Img1,
    price: "3,669,000 VND",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    img: Img2,
    title: "Nike Air Max 270 ",
    price: "4,699,000 VND",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    img: Img3,
    title: "Air Jordan XXXVII PF",
    price: "5,439,000 VND",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    img: Img2,
    title: "Air Jordan XXXVII PF",
    price: "5,439,000 VND",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28be",
    img: Img2,
    title: "Air Jordan XXXVII PF",
    price: "5,439,000 VND",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bf",
    img: Img2,
    title: "Air Jordan XXXVII PF",
    price: "5,439,000 VND",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bg",
    img: Img2,
    title: "Air Jordan XXXVII PF",
    price: "5,439,000 VND",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <View>
      <Image style={styles.tinyLogo} source={item.img} />
    </View>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <Text style={[styles.price, { color: textColor }]}>{item.price}</Text>
    <Button>Get Now</Button>
  </TouchableOpacity>
);

const ItemsList = () => {
  const [selectedId, setSelectedId] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#a39e9e" : "#D3D3D3";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        isLoaded={isLoaded}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Center h="500" mr={7} w="350" rounded="lg" shadow={6}>
        {" "}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          horizontal={true}
          borderWither={1}
        />
      </Center>
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
  },
  tinyLogo: {
    width: 200,
    height: 250,
    alignContent: "flex-start",
  },
  spotlight: {
    borderColor: "black",
  },
});

export default ItemsList;
