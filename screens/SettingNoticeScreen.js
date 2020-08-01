import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from "react-native";
import NavigationHeader from "../components/NavigationHeader";

const noticeList = [
  {
    title: "notice1",
    day: "2020-07-20"
  },
  {
    title: "notice2",
    day: "2020-07-21"
  }
]

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
        <FlatList
          data={noticeList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.notice}
              /*onPress={() => {
              }}*/>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.day}>{item.day}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}/>
        {/* 여기까지 앱 공지사항 레이아웃 */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  notice: {
    height: 70,
    alignItems: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  title: {
    fontSize: 17,
    paddingBottom: 5
  },
  day: {
    color: "#ee"
  }
});
