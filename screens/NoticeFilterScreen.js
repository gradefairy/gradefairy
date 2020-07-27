import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NoticeFilterScreen({navigation}) {
  return (
    <View style={GlobalStyles.container}>
      <NavigationHeader title={"맞춤 공지 설정"} navigation={navigation} />
      {/* 여기서부터 맞춤 공지 레이아웃 */}
      <View style={styles.wrapper}>
        <Text style={styles.inner_text}>학사/장학 공지</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="toggle-switch" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.inner_text}>기숙사 공지</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="toggle-switch-off-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      {/* 아코디언 메뉴 */}
      
      {/* 여기까지 맞춤 공지 레이아웃 */}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  inner_text: {
    fontSize:17,
  },
});

