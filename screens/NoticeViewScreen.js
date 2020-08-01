import React from "react";
import {View, Text, StyleSheet} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";


export default class NoticeViewScreen extends React.Component {
  render() {
    const noticeData = this.props.route.params;
    return (
      <View style={GlobalStyles.container}>
        <NavigationHeader title={noticeData.title} navigation={this.props.navigation} />
        <Text>NoticeViewScreen.js</Text>
      </View>
    );
  }
}