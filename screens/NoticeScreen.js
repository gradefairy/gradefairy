import * as React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList} from "react-native";
import NavigationHeader from "../components/NavigationHeader";
import {createStackNavigator} from "@react-navigation/stack";
import NoticeSearchScreen from "./NoticeSearchScreen";
import NoticeFilterScreen from "./NoticeFilterScreen";
import NoticeViewScreen from "./NoticeViewScreen";
import {Ionicons} from "@expo/vector-icons";

const noticeList = [{
  type: "취업",
  title: "[한국감정원] 제1기 청년 홍보단 모집공고",
  date: "2020-07-10"
}, {
  type: "모집채용",
  title: "2020 로봇산업 온라인해커톤 운영관리 스태프 모집",
  date: "2020-07-10"
}, {
  type: "취업",
  title: "[서울국제친선협회] 2020년 하계 캠프 체험",
  date: "2020-07-08"
}, {
  type: "모집채용",
  title: "하이투게더(HY Together) 멘토 모집",
  date: "2020-07-06"
}, {
  type: "취업",
  title: "[하포리서치코리아] Challenge 캠프",
  date: "2020-07-03"
}, {
  type: "모집채용",
  title: "한양대학교 산업협력단 아르바이트",
  date: "2020-07-02"
}, {
  type: "학사",
  title: "2020-군e러닝1학기 성적처리 행정",
  date: "2020-07-02"
}, {
  type: "모집채용",
  title: "한양대학교 산업협력단 아르바이트",
  date: "2020-07-02"
},{
  type: "모집채용",
  title: "한양대학교 산업협력단 아르바이트",
  date: "2020-07-02"
},{
  type: "모집채용",
  title: "한양대학교 산업협력단 아르바이트",
  date: "2020-07-02"
},{
  type: "모집채용",
  title: "한양대학교 산업협력단 아르바이트",
  date: "2020-07-02"
},{
  type: "모집채용",
  title: "한양대학교 산업협력단 아르바이트",
  date: "2020-07-02"
},{
  type: "모집채용",
  title: "한양대학교 산업협력단 아르바이트",
  date: "2020-07-02"
},{
  type: "모집채용",
  title: "한양대학교 산업협력단 아르바이트",
  date: "2020-07-02"
}];
/* 여기까지 공지 리스트 데이터 */

const width = Dimensions.get("window").width;

const NoticeList = ({navigation}) => (
  <View style={GlobalStyles.container}>
    <NavigationHeader title={"공지사항"} />
    <View style={styles.iconContainer}>
      <TouchableOpacity hitSlop={{top:32, bottom:32, right:32}} onPress={() => {
        navigation.navigate("NoticeFilter");
      }}>
        <Ionicons name={"ios-funnel"} size={20} />
      </TouchableOpacity>
      <TouchableOpacity hitSlop={{top:32, bottom:32, right:32}} onPress={() => {
        navigation.navigate("NoticeSearch");
      }}>
        <Ionicons name={"ios-search"} size={22} />
      </TouchableOpacity>
    </View>
    <View style={GlobalStyles.tableContainer}>
      {/* 여기서부터 공지 리스트 레이아웃 */}
      <FlatList
        data={noticeList}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={1}
            style={GlobalStyles.tableDataContainer}
            onPress={() => {navigation.navigate("NoticeView", item);}}>
            <Text style={[GlobalStyles.tableData, {width: width / 10 * 2}]}>{item.type}</Text>
            <Text style={[GlobalStyles.tableData, {width: width / 10 * 5, textAlign: "left"}]}>
              {(item.title.length > 22) ? `${item.title.substr(0, 22)}...` : item.title}
            </Text>
            <Text style={[GlobalStyles.tableData, {width: width / 10 * 3}]}>{item.date}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={()=>{
          return (
            <View style={[GlobalStyles.tableHeaderContainer, {backgroundColor:"white"}]}>
              <Text style={[GlobalStyles.tableHeader, {width: width / 10 * 2}]}>분류</Text>
              <Text style={[GlobalStyles.tableHeader, {width: width / 10 * 5}]}>제목</Text>
              <Text style={[GlobalStyles.tableHeader, {width: width / 10 * 3}]}>작성일</Text>
            </View>
          );
        }}
        stickyHeaderIndices={[0]}/>
      {/* 여기까지 공지 리스트 레이아웃 */}
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
