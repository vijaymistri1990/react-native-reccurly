import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/(auth)/SignIn" asChild>
        <Text className="text-blue-500 mt-4 underline">Sign In</Text>
      </Link>
    </View>
  );
};

export default SignUp;
