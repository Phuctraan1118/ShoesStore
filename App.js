import * as React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feed from "./components/Home/Feed";
import Notifications from "./components/Updates/Notifications";
import Profile from "./components/Profile/Profile";
import { NativeBaseProvider, Center, StatusBar } from "native-base";
import { Button } from "react-native-paper";
import { SignInScreen } from "./components/Login/SignInScreen";

import AppBarHeader from "./components/Header/AppBar";
import { ShoppingCart, TotalCart } from "./components/ShoppingCart/TotalCart";
import { ItemDetails } from "./components/Updates/ItemDetail";
import { Provider } from "react-redux";
import { store } from "./store";
import Navigation from "./components/navigation";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#e91e63"
          labelStyle={{ fontSize: 12 }}
          style={{ backgroundColor: "tomato" }}
        >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Navigation"
            component={Navigation}
            options={{
              tabBarLabel: "Products",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          {/* <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          /> */}
          <Tab.Screen
            name="Login"
            component={SignInScreen}
            options={{
              tabBarLabel: "SignInScreen",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          {/* <Tab.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{
              tabBarLabel: "ShoppingCart",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }}
          /> */}
          {/* <Tab.Screen
            name="ItemDetails"
            component={ItemDetails}
            options={{
              tabBarLabel: "ItemDetails",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }}
          /> */}
        </Tab.Navigator>
      </NativeBaseProvider>
      <StatusBar style="auto" />
    </Provider>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
