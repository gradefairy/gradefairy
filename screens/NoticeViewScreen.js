import React from "react";
import {View, Text} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";

export default class NoticeViewScreen extends React.Component {
  render() {
    const noticeData = this.props.route.params;
    return (
      <View style={GlobalStyles.container}>
        <NavigationHeader title={noticeData.title} navigation={this.props.navigation} />
        {/* 여기서부터 공지 보기 레이아웃 */}
        <Text>NoticeViewScreen.js</Text>
        {/* 여기까지 공지 보기 레이아웃 */}
      </View>
    );
  }
}
