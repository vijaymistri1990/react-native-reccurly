import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../../global.css";

export default function Index() {
  return (
    <View className="flex-1 flex flex-col gap-4 justify-center items-center bg-background">
      <Text className="text-3xl font-bold text-success">
        Love you Shiv-Parvati
      </Text>
      <Link className="mt-2 px-4 bg-primary rounded-2xl p-2" href="/Onboarding">
        <Text className="text-white text-xl">Go to Onboarding</Text>
      </Link>
      <Link className="px-4 bg-primary rounded-2xl p-2" href="/(auth)/SignIn">
        <Text className="text-white text-xl">SignIn</Text>
      </Link>
      <Link className="px-4 bg-primary rounded-2xl p-2" href="/(auth)/SignUp">
        <Text className="text-white text-xl">SignUp</Text>
      </Link>
      <Link
        className="px-4 bg-primary rounded-2xl p-2"
        href="/(tabs)/subscription/spotify"
      >
        <Text className="text-white text-xl">Spotify Subscription</Text>
      </Link>
      <Link
        className="px-4 bg-primary rounded-2xl p-2"
        href={{
          pathname: "/(tabs)/subscription/[id]",
          params: { id: "youtube" },
        }}
      >
        <Text className="text-white text-xl">Youtube Subscription</Text>
      </Link>
    </View>
  );
}
