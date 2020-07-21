import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import BottomTab from "./components/BottomTab";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
