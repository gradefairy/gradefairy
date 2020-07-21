import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import NavigationHeader from "../components/NavigationHeader";
import {SafeAreaView} from "react-navigation";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const SettingMypageScreen = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"개인 정보 관리"} navigation={navigation} />
  </View>
);

const SettingAuthScreen = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"인증 정보 관리"} navigation={navigation} />
  </View>
);

const SettingNoticeScreen = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"앱 공지사항"} navigation={navigation} />
  </View>
);

const SettingAppVersionScreen = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"앱 버전 정보"} navigation={navigation} />
  </View>
);

const SettingFAQScreen = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"자주 묻는 질문"} navigation={navigation} />
  </View>
);

const SettingLeaveScreen = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"앱 탈퇴하기"} navigation={navigation} />
  </View>
);

const SettingList = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"설정"} />
    <Text onPress={() => {navigation.navigate("SettingMypage");}}>개인 정보 관리</Text>
    <Text onPress={() => {navigation.navigate("SettingAuth");}}>인증 정보 관리</Text>
    <Text onPress={() => {navigation.navigate("SettingNotice");}}>앱 공지사항</Text>
    <Text onPress={() => {navigation.navigate("SettingAppVersion");}}>앱 버전 정보</Text>
    <Text onPress={() => {navigation.navigate("SettingFAQ");}}>자주 묻는 질문</Text>
    <Text onPress={() => {navigation.navigate("SettingLeave");}}>앱 탈퇴하기</Text>
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
        <Stack.Screen name={"SettingLeave"} component={SettingLeaveScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
});
