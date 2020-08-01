import React from "react";
import {StyleSheet, Platform, StatusBar} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  tableContainer: {
    flex: 1
  },
  tableHeaderContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    height: 50,
    alignItems: "center"
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
  tableDataContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    height: 60,
    alignItems: "center"
  },
  tableData: {
    textAlign: "center"
  }
});
