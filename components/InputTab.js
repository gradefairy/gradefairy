import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default class InputTab extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>title</Text>
                <View style={styles.box}>
                    <TextInput 
                        style={styles.input}
                        placeholder={"write"}
                        maxLength={50}
                        returnKeyType="done"
                    />
                </View>
            </View>
        );
            }
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingTop: 15,
      paddingHorizontal: 15
    },
    title: {
      fontSize: 12,
      paddingBottom: 5,
      paddingHorizontal: 5
    },
    box: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#E8E5E5",
      paddingHorizontal: 10,
      paddingVertical: 5
    },
    input: {
      fontSize: 17,
    }
  });  