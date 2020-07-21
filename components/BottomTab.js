import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NoticeScreen from "../screens/NoticeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SettingScreen from "../screens/SettingScreen";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={"SettingScreen"}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#675CF6",
          inactiveTintColor: "gray"
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name == "HomeScreen") iconName = "home";
            else if(route.name == "NoticeScreen") iconName = "notifications";
            else if(route.name == "CalendarScreen") iconName = "calendar";
            else iconName = "settings";

            return <Ionicons name={`ios-${iconName}`} size={size} color={color} />
          }
        })}>
        <Tab.Screen name={"HomeScreen"} component={HomeScreen} />
        <Tab.Screen name={"NoticeScreen"} component={NoticeScreen} />
        <Tab.Screen name={"CalendarScreen"} component={CalendarScreen} />
        <Tab.Screen name={"SettingScreen"} component={SettingScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
