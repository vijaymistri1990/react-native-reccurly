import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/SignUp">
        <Text className="text-blue-500 mt-4 underline">Create an Account</Text>
      </Link>
    </View>
  )
}

export default SignIn