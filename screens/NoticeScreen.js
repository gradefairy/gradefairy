import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function NoticeScreen() {
  return (
    <View style={styles.container}>
      <Text>Notice.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
