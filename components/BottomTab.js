import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NoticeScreen from "../screens/NoticeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SettingScreen from "../screens/SettingScreen";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <View style={GlobalStyles.container}>
      <Tab.Navigator
        initialRouteName={"Calendar"}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#675CF6",
          inactiveTintColor: "gray"
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name == "Home") iconName = "home";
            else if(route.name == "Notice") iconName = "notifications";
            else if(route.name == "Calendar") iconName = "calendar";
            else iconName = "settings";

            return <Ionicons name={`ios-${iconName}`} size={size} color={color} />
          }
        })}>
        <Tab.Screen name={"Home"} component={HomeScreen} />
        <Tab.Screen name={"Notice"} component={NoticeScreen} />
        <Tab.Screen name={"Calendar"} component={CalendarScreen} />
        <Tab.Screen name={"Setting"} component={SettingScreen} />
      </Tab.Navigator>
    </View>
  );
}
