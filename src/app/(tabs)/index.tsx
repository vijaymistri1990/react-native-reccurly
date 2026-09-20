import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import "../../../global.css";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-sans-bold text-success">
        Love you Shiv-Parvati
      </Text>
      <Link className="mt-2 px-4 bg-primary p-2" href="/Onboarding">
        <Text className="text-white text-xl">Go to Onboarding</Text>
      </Link>
      <Link className="px-4 mt-2 bg-primary p-2" href="/(auth)/SignIn">
        <Text className="text-white text-xl">SignIn</Text>
      </Link>
      <Link className="px-4 mt-2 bg-primary p-2" href="/(auth)/SignUp">
        <Text className="text-white text-xl">SignUp</Text>
      </Link>
    </SafeAreaView>
  );
}
