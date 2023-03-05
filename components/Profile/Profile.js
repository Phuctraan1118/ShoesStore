import {
  Box,
  Button,
  Center,
  Divider,
  Stack,
  useColorMode,
  useColorModeValue,
  Text,
} from "native-base";
import { StyleSheet, View } from "react-native";
import { AvatarProfile } from "./Avatar";
import { StaggerProfile } from "./Stagger";
function Profile() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <UseColorMode />
    </View>
  );
}
function UseColorMode() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Light", "Dark");
  const bg = useColorModeValue("warmGray.50", "coolGray.800");
  const styles = StyleSheet.create({
    staggerProfile: {},
  });
  return (
    <Box p="10" bg={bg} w="100%" h="100%">
      <Stack>
        <Center>
          <Text fontSize="lg" display="flex" mb={10}>
            <Text bold fontSize="18px">
              {text}
            </Text>
          </Text>
          <AvatarProfile />
          <Text fontSize="2xl">Tran Thien Phuc</Text>
          <Button onPress={toggleColorMode} h={10}>
            Change color mode
          </Button>
        </Center>
        <Center w="100%" ml="150" mt={10}>
          <StaggerProfile />
        </Center>
      </Stack>

      {/* <Stack mb="2.5" ml="5" mt="1.5" direction="column" space={3}>
        <Center
          size="16"
          bg="primary.400"
          rounded="sm"
          _text={{
            color: "warmGray.50",
            fontWeight: "medium",
          }}
          shadow={"3"}
        >
          Box 1
        </Center>
        <Center
          bg="primary.500"
          size="16"
          rounded="sm"
          _text={{
            color: "warmGray.50",
            fontWeight: "medium",
          }}
          shadow={"3"}
        >
          Box 2
        </Center>
        <Center
          size="16"
          bg="primary.700"
          rounded="sm"
          _text={{
            color: "warmGray.50",
            fontWeight: "medium",
          }}
          shadow={"3"}
        >
          Box 3
        </Center>
      </Stack>
      <Divider /> */}
    </Box>
  );
}
export default Profile;
