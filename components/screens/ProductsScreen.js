import { useNavigation } from "@react-navigation/native";
import { Center, Box } from "native-base";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Box style={styles.itemContainer}>
          <TouchableOpacity>
            <Center shadow={4}>
              <Pressable
                onPress={() => {
                  // update selected product
                  dispatch(productsSlice.actions.setSelectedProduct(item.id));

                  navigation.navigate("Product Details");
                }}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={[styles.name]}>{item.name}</Text>
                <Text style={[styles.price]}>${item.price}</Text>
              </Pressable>
            </Center>
          </TouchableOpacity>
        </Box>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  // itemBox: {
  //   width: "100%",
  // },
  itemContainer: {
    padding: 5,
    paddingTop: 1,
    width: "50%",
    height: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: "20px",
  },
  name: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 20,
  },
  price: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ProductsScreen;
