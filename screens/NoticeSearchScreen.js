import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import {Ionicons} from "@expo/vector-icons";

const width = Dimensions.get("window").width;

export default function NoticeSearchScreen({navigation}) {
  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backBtn}>
          <Ionicons name={"ios-arrow-back"} size={24} color={"#888"} />
        </TouchableOpacity>
        <TextInput
          placeholder={"Search"}
          style={styles.searchTextInput} />
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name={"ios-search"} size={24} color={"#888"} />
        </TouchableOpacity>
      </View>
      <Text>NoticeSearchScreen.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
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
  }
});
