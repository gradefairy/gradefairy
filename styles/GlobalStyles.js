import React from "react";
import {StyleSheet, Platform, StatusBar} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
  },
  // 포인트컬러(#675cf6)가 바탕인 버튼
  btnColored: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#564af3",
    backgroundColor: "#675cf6"
  },
  textWhite: {
    color: "white"
  }
});
