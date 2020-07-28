import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import {Ionicons, Entypo} from "@expo/vector-icons";

const width = Dimensions.get("window").width;

export default function NoticeSearchScreen({navigation}) {
  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          hitSlop={{top:32, bottom:32, right:32}}
          style={styles.backBtn}>
          <Ionicons name={"ios-arrow-back"} size={24} color={"#888"} />
        </TouchableOpacity>
        <TextInput
          placeholder={"Search"}
          style={styles.searchTextInput} />
        <TouchableOpacity hitSlop={{top:32, bottom:32, right:32}} style={styles.searchBtn}>
          <Ionicons name={"ios-search"} size={24} color={"#888"} />
        </TouchableOpacity>
      </View>
      {/* 여기서부터 공지 검색 레이아웃 */}
      <View style={styles.searchItems}>
        <View style={styles.searchItem}>
          <Entypo name="back-in-time" size={24} color="#ccc" style={styles.search_icon} />
          <Text style={styles.search_Text}>대회</Text>
        </View>
        <View style={styles.searchItem}>
          <Entypo name="back-in-time" size={24} color="#ccc" style={styles.search_icon} />
          <Text style={styles.search_Text}>동아리</Text>
        </View>
        <View style={styles.searchItem}>
          <Entypo name="back-in-time" size={24} color="#ccc" style={styles.search_icon} />
          <Text style={styles.search_Text}>기숙사</Text>
        </View>
        <View style={styles.searchItem}>
          <Entypo name="back-in-time" size={24} color="#ccc" style={styles.search_icon} />
          <Text style={styles.search_Text}>장학</Text>
        </View>
      </View>
      {/* 여기까지 공지 검색 레이아웃 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems:"center",
  },
  searchBarContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    lineHeight: 50,
    borderRadius: 100,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  backBtn: {
    width: 20
  },
  searchBtn: {
    width: 20,
  },
  searchTextInput: {
    width: width - 40 - 40 - 40 - 10,
    marginHorizontal: 5
  },
  searchItems:{
    width:"95%",
    justifyContent:"center",
    alignItems: "center",
  },
  searchItem:{
    width:"95%",
    height:45,
    position:"relative",
    flexDirection: "row",
    justifyContent:"flex-start",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  search_icon:{
    width: "15%",
  },
  search_Text:{
    fontSize:17,
    width: "80%",
    color:"gray",
  }
});
