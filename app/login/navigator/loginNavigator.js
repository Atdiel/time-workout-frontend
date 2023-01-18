import React from "react";

//* import navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//* import screen { logIn, home }
import signIn from "../signIn/signInScreen";
import SignUp from "../signUp/signUpScreen";
import HomeNavigator from "../../home/navigator/homeNavigator";
import UploadProfilePictureScreen from "../signUp/profilePictureScreen";

export default function LoginNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="login"
      >
        <Stack.Screen name="login" component={signIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen
          name="uploadImage"
          component={UploadProfilePictureScreen}
        />
        <Stack.Screen name="home" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
