import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>{id} Subscription</Text>
      <Link href="/">Go Back</Link>
    </View>
  );
};

export default SubscriptionDetail;
