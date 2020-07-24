import React from "react";
import {View, Text} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";

export default function NoticeFilterScreen({navigation}) {
  return (
    <View style={GlobalStyles.container}>
      <NavigationHeader title={"맞춤 공지 설정"} navigation={navigation} />
      {/* 여기서부터 맞춤 공지 레이아웃 */}
      <Text>NoticeFilterScreen.js</Text>
      {/* 여기까지 맞춤 공지 레이아웃 */}
    </View>
  );
}
