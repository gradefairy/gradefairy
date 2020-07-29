import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import {Ionicons, Entypo} from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;

export default class NoticeSearchScreen extends React.Component {
  state = {
    inputValue: "",
    record : ["대회", "기숙사", "장학"]
  }

  _changeText = (value) => {
    this.setState({inputValue: value});
  }

  _addRecord = () => {
    const prevRecord = this.state.record;
    const newRecord = this.state.inputValue;
    this.setState({record: prevRecord.concat(newRecord), inputValue:""});
  }

  render() {
    return (
      <View style={[GlobalStyles.container, styles.container]}>
        <View style={styles.searchBarContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            hitSlop={{top:30, bottom:30, left:30}}
            style={styles.backBtn}>
            <Ionicons name={"ios-arrow-back"} size={24} color={"#888"} />
          </TouchableOpacity>
          <TextInput
            value={this.state.inputValue}
            placeholder={"Search"}
            style={styles.searchTextInput}
            onChangeText={this._changeText}
            onEndEditing={this._addRecord} />
          <TouchableOpacity 
            hitSlop={{top:32, bottom:32, right:32}} 
            style={styles.searchBtn}
            onPress={() => this._addRecord}>
            <Ionicons name={"ios-search"} size={24} color={"#888"} />
          </TouchableOpacity>
        </View>
        {/* 여기서부터 공지 검색 레이아웃 */}
        <View style={styles.searchItems}>
          <FlatList
            data={this.state.record}
            renderItem={({item}) => (
              <View style={styles.searchItem}>
                  <Entypo name="back-in-time" size={24} color="#ccc" style={styles.item_icon} />
                  <Text style={styles.search_Text}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => String(index)}
          ></FlatList>
        </View>
        {/* 여기까지 공지 검색 레이아웃 */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems:"center",
  },
  searchBarContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    width:"100%",
    height: 50,
    borderRadius: 100,
    marginVertical: 10,
    flexDirection: "row", 
    alignItems: "center",
    paddingHorizontal: 20
  },
  backBtn: {
    width: 20
  },
  searchBtn: {
    width: 20,
  },
  searchTextInput: {
    width: width - 40 - 40 - 40 - 10,
    marginHorizontal: 5
  },
  searchItems:{
    width:"95%",
    justifyContent:"center",
    alignItems: "flex-start",
    // backgroundColor:"green"
  },
  searchItem:{
    width:"100%",
    height:45,
    // position:"relative",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:"purple"

    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  item_icon:{
    // width: "15%",
    marginRight:20,
    marginLeft:20
  },
  search_Text:{
    fontSize:17,
    // width: "80%",
    color:"gray",
  }
});
