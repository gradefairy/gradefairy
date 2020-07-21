import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function NavigationHeader({title, navigation}) {
  return (
    <View style={styles.container}>
      {(navigation) ?
        (<View style={styles.backBtn}>
        <TouchableOpacity onPress={() => {navigation.goBack();}}>
          <Ionicons name={"ios-arrow-back"} size={24} />
        </TouchableOpacity>
      </View>) : null
      }
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
