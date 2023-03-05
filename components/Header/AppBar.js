import { Box, HStack, Icon, IconButton, StatusBar, Text } from "native-base";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ActionsheetHome from "../ActionSheet/ActionSheetHome";

export default function AppBarHeader(props) {
  {
  }
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#e91e63" />
      <HStack
        bg="#e91e63"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon size="xs" as={ActionsheetHome} name="menu" color="white" />
            }
          />
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="favorite"
                size="sm"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}

// function Example() {
//   return (
//     <Center>
//       <AppBar />
//     </Center>
//   );
// }
