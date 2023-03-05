import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LoadingSkeleton } from "../Loading/Skeleton";
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const MyComponent = () => <LoadingSkeleton />;

export default MyComponent;
