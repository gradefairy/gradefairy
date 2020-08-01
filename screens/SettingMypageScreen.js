import React from "react";
import {StyleSheet, View} from "react-native";
import NavigationHeader from "../components/NavigationHeader";
import Input from "../components/InputTab";

export default class SettingMypageScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={"개인 정보 관리"}
          navigation={this.props.navigation} />
        {/* 여기서부터 개인 정보 관리 레이아웃 */}
        <Input />
        <Input />
        <Input />
        <Input />
        {/* 여기까지 개인 정보 관리 레이아웃 */}
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
