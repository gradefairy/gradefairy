import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import NavigationHeader from "../components/NavigationHeader";
import {SafeAreaView} from "react-navigation";
import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from "@expo/vector-icons";

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

const settingMenus = [{
  title: "개인 정보 관리",
  name: "SettingMypage",
  icon: "person"
},{
  title: "인증 정보 관리",
  name: "SettingAuth",
  icon: "lock"
},{
  title: "앱 공지사항",
  name: "SettingNotice",
  icon: "notifications"
},{
  title: "앱 버전 정보",
  name: "SettingAppVersion",
  icon: "stats"
},{
  title: "자주 묻는 질문",
  name: "SettingFAQ",
  icon: "help-circle"
},{
  title: "앱 탈퇴하기",
  name: "SettingLeave",
  icon: "remove-circle"
}];

const SettingList = ({navigation}) => (
  <View style={styles.container}>
    <NavigationHeader title={"설정"} />
    <FlatList
      data={settingMenus}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.menu}
            onPress={() => {
              navigation.navigate(item.name);
            }}>
            <Ionicons name={`ios-${item.icon}`} size={20} style={styles.icon} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item, index) => index} />
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
