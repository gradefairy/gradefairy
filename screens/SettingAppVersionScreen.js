import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import {StyleSheet, View} from "react-native";
import NavigationHeader from "../components/NavigationHeader";

export default class SettingAppVersionScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={GlobalStyles.container}>
        <NavigationHeader
          title={"앱 버전 정보"}
          navigation={this.props.navigation} />
        {/* 여기서부터 앱 버전 정보 레이아웃 */}
        {/* 여기까지 앱 버전 정보 레이아웃 */}
      </View>
    );
  }
}
