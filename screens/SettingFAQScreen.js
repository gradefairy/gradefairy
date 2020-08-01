import React from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from "react-native";
import NavigationHeader from "../components/NavigationHeader";

const faqList = [
  {
    title: "title1",
    contents: "contents1"
  },
  {
    title: "title2",
    contents: "contents2"
  }
]

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
        <FlatList
          data={faqList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.faq}
              /*onPress={() => {
              }}*/>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  faq: {
    height: 50,
    alignItems: "center",
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row"
  },
  title: {
    fontSize: 15
  }
});
