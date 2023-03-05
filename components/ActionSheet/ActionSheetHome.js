import {
  Actionsheet,
  Box,
  Button,
  Center,
  CloseIcon,
  Icon,
  IconButton,
  SmallCloseIcon,
  Text,
  useDisclose,
} from "native-base";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Path } from "react-native-svg";
export default function ActionsheetHome() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <IconButton
        icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />}
        onPress={onOpen}
      />
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Menu
            </Text>
          </Box>
          <Actionsheet.Item
            startIcon={<Icon as={MaterialIcons} size="6" name="home" />}
          >
            Home
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Icon as={MaterialIcons} name="store" size="6" />}
          >
            Products
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Icon as={Ionicons} name="person" size="6" />}
          >
            Profile
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Icon as={MaterialIcons} size="6" name="favorite" />}
          >
            Favourite
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={onClose}
            startIcon={
              <Icon viewBox="0 0 24 24" size="6" fill="none">
                <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
              </Icon>
            }
          >
            Cancel
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
