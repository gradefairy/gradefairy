import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

/* 네비게이션 헤더 생성 */
/* usage: <NavigationHeader title={HEADER_TITLE} /> */
/* usage(+backButton): <NavigationHeader title={HEADER_TITLE} navigation={NAVIGATION_OBJECT} /> */
/* usage(+right component): <NavigationHeader title={HEADER_TITLE} right={RIGHT_COMPONENT} /> */
export default function NavigationHeader({title, navigation, right}) {
  return (
    <View style={styles.container}>
      {/* back button이 필요한 경우 navigation을 받아야 함 */}
      {(navigation) ?
        (<View style={styles.backBtn}>
        <TouchableOpacity
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
          onPress={() => {navigation.goBack();}}>
          <Ionicons name={"ios-arrow-back"} size={24} />
        </TouchableOpacity>
      </View>) : null
      }
      {/* 헤더 타이틀 */}
      <Text style={styles.title}>{title}</Text>
      {/* 헤더 우측에 추가해야하는 컴포넌트가 있을시 노출 */}
      {(right) ?
        (<View style={styles.right}>
          {right}
        </View>) : null
      }
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
    left: 20,
    height: 50,
    justifyContent: "center"
  },
  title: {
    fontSize: 17
  },
  right: {
    position: "absolute",
    top: 0,
    right: 20,
    height: 50,
    justifyContent: "center"
  }
});
