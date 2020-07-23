import * as React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import NavigationHeader from "../components/NavigationHeader";
import {createStackNavigator} from "@react-navigation/stack";
import NoticeSearchScreen from "./NoticeSearchScreen";
import NoticeFilterScreen from "./NoticeFilterScreen";
import NoticeViewScreen from "./NoticeViewScreen";
import {Ionicons} from "@expo/vector-icons";

const NoticeList = ({navigation}) => (
  <View style={GlobalStyles.container}>
    <NavigationHeader title={"공지사항"} />
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("NoticeFilter");
      }}>
        <Ionicons name={"ios-funnel"} size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate("NoticeSearch");
      }}>
        <Ionicons name={"ios-search"} size={22} />
      </TouchableOpacity>
    </View>
  </View>
);

const Stack = createStackNavigator();

export default function NoticeScreen() {
  return (
    <Stack.Navigator
      headerMode={"none"}
      initialRouteName={"NoticeList"}>
      <Stack.Screen name={"NoticeList"} component={NoticeList} />
      <Stack.Screen name={"NoticeSearch"} component={NoticeSearchScreen} />
      <Stack.Screen name={"NoticeFilter"} component={NoticeFilterScreen} />
      <Stack.Screen name={"NoticeView"} component={NoticeViewScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  }
});
