import React from "react";
import {View, Text} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";

export default function NoticeFilterScreen({navigation}) {
  return (
    <View style={GlobalStyles.container}>
      <NavigationHeader title={"맞춤 공지 설정"} navigation={navigation} />
      <Text>NoticeFilterScreen.js</Text>
    </View>
  );
}
