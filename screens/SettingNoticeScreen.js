import React from "react";
import {StyleSheet, View} from "react-native";
import NavigationHeader from "../components/NavigationHeader";

export default class SettingNoticeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={"앱 공지사항"}
          navigation={this.props.navigation} />
        {/* 여기서부터 앱 공지사항 레이아웃 */}
        {/* 여기까지 앱 공지사항 레이아웃 */}
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
