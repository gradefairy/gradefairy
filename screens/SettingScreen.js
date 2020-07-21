import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert, FlatList} from "react-native";
import NavigationHeader from "../components/NavigationHeader";
import {SafeAreaView} from "react-navigation";
import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from "@expo/vector-icons";
import SettingMypageScreen from "./SettingMypageScreen";
import SettingAuthScreen from "./SettingAuthScreen";
import SettingNoticeScreen from "./SettingNoticeScreen";
import SettingAppVersionScreen from "./SettingAppVersionScreen";
import SettingFAQScreen from "./SettingFAQScreen";
import LeaveAlert from "../components/LeaveAlert";

const Stack = createStackNavigator();
const settingMenu = [{
  title: "개인 정보 관리",
  screen: "SettingMypage",
  icon: "person"
},{
  title: "인증 정보 관리",
  screen: "SettingAuth",
  icon: "lock"
},{
  title: "앱 공지사항",
  screen: "SettingNotice",
  icon: "notifications"
},{
  title: "앱 버전 정보",
  screen: "SettingAppVersion",
  icon: "stats"
},{
  title: "자주 묻는 질문",
  screen: "SettingFAQ",
  icon: "help-circle"
},{
  title: "앱 탈퇴하기",
  screen: null,
  icon: "remove-circle"
}];

const SettingList = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"설정"} />
    {/* 페이지 이동이 필요한 경우 navigation.navigate,
    앱 탈퇴하기의 경우 페이지 이동 대신 Alert 창을 띄우는 것으로 대신
    각 페이지는 (SettingMypage|SettingAuth|SettingNotice|SettingAppVersion|SettingFAQ).js 에서 레이아웃 작성
    앱 탈퇴하기 기능은 components/LeaveAlert.js에서 작성 */}
    <FlatList
      data={settingMenu}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.menu}
          onPress={() => {
            if(item.screen != null) navigation.navigate(item.screen);
            else LeaveAlert();
          }}>
          <Ionicons name={`ios-${item.icon}`} size={20} style={styles.icon} />
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index}/>
  </View>
);

export default function SettingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        initialRouteName={"SettingList"}
        headerMode={"none"}>
        <Stack.Screen name={"SettingList"} component={SettingList} />
        <Stack.Screen name={"SettingMypage"} component={SettingMypageScreen} />
        <Stack.Screen name={"SettingAuth"} component={SettingAuthScreen} />
        <Stack.Screen name={"SettingNotice"} component={SettingNoticeScreen} />
        <Stack.Screen name={"SettingAppVersion"} component={SettingAppVersionScreen} />
        <Stack.Screen name={"SettingFAQ"} component={SettingFAQScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  menu: {
    height: 50,
    alignItems: "center",
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row"
  },
  icon: {
    marginRight: 15
  }
});
