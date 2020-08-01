import React from "react";
import {StyleSheet, View} from "react-native";
import NavigationHeader from "../components/NavigationHeader";
import Input from "../components/InputTab";

export default class SettingAuthScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={"인증 정보 관리"}
          navigation={this.props.navigation} />
          {/* 여기서부터 인증 정보 관리 레이아웃 */}
          <Input />
          <Input />
          {/* 여기까지 인증 정보 관리 레이아웃 */}
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
