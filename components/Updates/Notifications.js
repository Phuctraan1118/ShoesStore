import { Heading, Icon, Input, VStack } from "native-base";
import { Text, View } from "react-native";
import ItemsList from "./ListItems";

function Notifications() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <ItemsList />
      </View>
    </View>
  );
}
export default Notifications;
