import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

/* 네비게이션 헤더 생성 */
/* usage: <NavigationHeader title={"헤더 타이틀"} /> */
/* usage(+backButton): <NavigationHeader title={"헤더 타이틀"} navigation={navigation object} /> */
export default function NavigationHeader({title, navigation}) {
  return (
    <View style={styles.container}>
      {/* back button이 필요한 경우 navigation을 받아야 함 */}
      {(navigation) ?
        (<View style={styles.backBtn}>
        <TouchableOpacity onPress={() => {navigation.goBack();}}>
          <Ionicons name={"ios-arrow-back"} size={24} />
        </TouchableOpacity>
      </View>) : null
      }
      {/* 헤더 타이틀 */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 10,
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  backBtn: {
    position: "absolute",
    top: 0,
    left: 10,
    height: 50,
    justifyContent: "center"
  },
  title: {
    fontSize: 17
  }
});
