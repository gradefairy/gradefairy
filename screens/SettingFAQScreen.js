import React from "react";
import {StyleSheet, View} from "react-native";
import NavigationHeader from "../components/NavigationHeader";

export default class SettingFAQScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={"자주 묻는 질문"}
          navigation={this.props.navigation} />
          {/* 여기서부터 자주 묻는 질문 레이아웃 */}
          {/* 여기까지 자주 묻는 질문 레이아웃 */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
});
