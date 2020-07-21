import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home.js</Text>
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
