import { Avatar, Center, VStack } from "native-base";
export const AvatarProfile = () => {
  return (
    <Center>
      <VStack
        space={2}
        alignItems={{
          base: "center",
          md: "flex-start",
        }}
      >
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="2xl"
          source={{
            uri: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/291908500_3389699317979227_2061038025843745528_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aqUkSh1RfGAAX-BYY0N&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAuRObeFkjNY_y5nrDa7kpkcSb5iRVLPhScvA8ti1I23Q&oe=63E4FED4",
          }}
        >
          RB
        </Avatar>
      </VStack>
    </Center>
  );
};
