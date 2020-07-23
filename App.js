import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import GlobalStyles from "./styles/GlobalStyles";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import BottomTab from "./components/BottomTab";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaView} from "react-navigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"SignIn"}
          screenOptions={{
            gestureEnabled: false
          }}
          headerMode={"none"}>
          <Stack.Screen name={"SignIn"} component={SignInScreen} />
          <Stack.Screen name={"SignUp"} component={SignUpScreen} />
          <Stack.Screen name={"Tab"} component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
