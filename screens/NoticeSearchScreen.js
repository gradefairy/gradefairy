import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, AsyncStorage} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import {Ionicons, Entypo} from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get("window").width;

export default class NoticeSearchScreen extends React.Component {
  state = {
    inputValue: "",
    record : []
  }

  componentWillMount() {
    this.getData()
  }

  storeData = () => {
    AsyncStorage.setItem('@search:state', JSON.stringify(this.state));
  }

  getData = () => {
      AsyncStorage.getItem('@search:state').then((state) => {
          if(state != null){
              this.setState(JSON.parse(state));
              this.setState({inputValue:""});
          }
      })
  }

  _changeText = (value) => {
    this.setState({inputValue: value}, this.storeData);
  }

  _addRecord = () => {
    if (this.state.inputValue != "") {
      const prevRecord = this.state.record;
      const newRecord = this.state.inputValue;
      this.setState({record: prevRecord.concat(newRecord), inputValue:""}, this.storeData);
    }
  }

  _deleteItem = (index) => {
    const newRecord = this.state.record;
    newRecord.splice(index, 1);
    this.setState({record: newRecord}, this.storeData);
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
            returnKeyType={"done"} />
          <TouchableOpacity
            hitSlop={{top:32, bottom:32, right:32}}
            style={styles.searchBtn}
            onPress={() => this._addRecord(this.state.inputValue)}>
            <Ionicons name={"ios-search"} size={24} color={"#888"} />
          </TouchableOpacity>
        </View>
        {/* 여기서부터 공지 검색 레이아웃 */}
        <View style={styles.searchItemContainer}>
          <FlatList
            data={this.state.record}
            renderItem={({item, index}) => (
              <View style={styles.searchItem}>
                <View style={styles.searchWord}>
                  <Entypo name="back-in-time" size={24} color="#ccc" style={styles.historyBtn} />
                  <Text style={styles.text}>{item}</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => this._deleteItem(index)}
                  hitSlop={{top:30, bottom:30, right:30}}
                  activeOpacity={0.8}>
                  <MaterialIcons name="delete" size={24} color="#ccc" />
                </TouchableOpacity>
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
    justifyContent: "center",
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
  searchItemContainer:{
    width:"95%",
  },
  searchItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    height: 50,
    alignItems: "center"
  },
  searchWord: {
    flexDirection: "row",
    alignItems: "center"
  },
  historyBtn: {
    marginRight: 10
  },
  deleteBtn: {}
});
