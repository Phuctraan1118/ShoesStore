import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Center, FlatList, Image, StatusBar } from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { ItemDetails } from "./ItemDetail";
import { Link } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { productsSlice } from "../../store/productsSlice";
import { useDispatch } from "react-redux";
import products from "../../data/products";

const SearchFilter = ({
  data,
  input,
  setInput,
  onPress,
  backgroundColor,
  textColor,
  navigation,
}) => {
  const [selectedId, setSelectedId] = useState();
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#a39e9e" : "#D3D3D3";
    const color = item.id === selectedId ? "white" : "black";

    if (input === "") {
      return (
        <Center>
          <TouchableOpacity style={[styles.item, { backgroundColor }]}>
            <View>
              <Image
                style={styles.tinyLogo}
                source={{ uri: item.img }}
                alt="img"
              />
            </View>
            <Text style={[styles.name, { color: textColor }]}>{item.name}</Text>
            <Text style={[styles.price, { color: textColor }]}>
              {item.price}
            </Text>
            <Center>
              <Button
                style={styles.getNow}
                onPress={() => {
                  // update selected product
                  dispatch(productsSlice.actions.setSelectedProduct(item.id));

                  navigation.navigate("Product Details");
                }}
              >
                {/* <LinkButton
                style={styles.link}
                to={{ screen: "ItemDetails", params: { id: "jane" } }}
              >
                Get Now
              </LinkButton> */}
                Get Now
              </Button>
            </Center>
          </TouchableOpacity>
        </Center>
      );
    }
    if (item.name.toLowerCase().includes(input.toLowerCase())) {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.item, { backgroundColor }]}
        >
          <View>
            <Image
              style={styles.tinyLogo}
              source={{ uri: item.img }}
              alt="img"
            />
          </View>
          <Text style={[styles.name, { color: textColor }]}>{item.name}</Text>
          <Text style={[styles.price, { color: textColor }]}>{item.price}</Text>
          <Center>
            <Button
              style={styles.getNow}
              onPress={() => {
                // update selected product
                dispatch(productsSlice.actions.setSelectedProduct(item.id));

                navigation.navigate("Product Details");
              }}
            >
              {/* <LinkButton
                style={styles.link}
                to={{ screen: "ItemDetails", params: { id: "jane" } }}
              >
                Get Now
              </LinkButton> */}
              Get Now
            </Button>
          </Center>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View>
      <FlatList data={data} input={input} renderItem={renderItem} />
    </View>
  );
};

export default SearchFilter;

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
    borderColor: "red",
  },

  name: {
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
  link: {
    fontSize: "lg",
  },
});
