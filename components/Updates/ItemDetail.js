import {
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Skeleton,
  Spinner,
  StatusBar,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Img1 from "../../../AwesomeProject/assets/img/1.png";
import products from "../../data/products";

// const product = [
//   {
//     id: "1",
//     image:
//       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/572475a8-427c-43a6-9fa9-5d41827fc848/air-force-1-07-shoes-hr5tH4.png",
//     images: [
//       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/572475a8-427c-43a6-9fa9-5d41827fc848/air-force-1-07-shoes-hr5tH4.png",
//       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/572475a8-427c-43a6-9fa9-5d41827fc848/air-force-1-07-shoes-hr5tH4.png",
//       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/572475a8-427c-43a6-9fa9-5d41827fc848/air-force-1-07-shoes-hr5tH4.png",
//       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/572475a8-427c-43a6-9fa9-5d41827fc848/air-force-1-07-shoes-hr5tH4.png",
//       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/572475a8-427c-43a6-9fa9-5d41827fc848/air-force-1-07-shoes-hr5tH4.png",
//       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/572475a8-427c-43a6-9fa9-5d41827fc848/air-force-1-07-shoes-hr5tH4.png",
//     ],
//     name: "Air Force 1",
//     price: 160,
//     sizes: [39, 40, 41],
//     description: "Inspired by the original that debuted in 1985",
//   },
// ];

export const ItemDetails = () => {
  const product = products[0];
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatList
            data={product.images}
            renderItem={({ item }) => (
              <Image
                style={{ width, aspectRatio: 1 }}
                source={{
                  uri: item,
                }}
                alt="Alternate Text"
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />

          <View style={{ padding: 20 }}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.sizes}>{product.sizes}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.benefits}>Benefits</Text>
            <Text style={styles.description}>{product.benefits}</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    width: 400,
    height: 400,
  },
  title: {
    paddingTop: 10,
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 10,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  benefits: {
    marginVertical: 10,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "500",
  },
});
