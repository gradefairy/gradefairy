import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";

export default class NoticeFilterScreen extends React.Component{
  state = {
    isFolding: false,
    on_college:false,
    on_dormitory:false,
    majors : [
      {
        id : 0,
        content : "컴퓨터소프트웨어학부",
        choose : false
      },
      {
        id : 1,
        content : "화학공학과",
        choose : false
      },
      {
        id : 2,
        content : "건축공학부",
        choose : false
      },
      {
        id : 3,
        content : "자원환경공학과",
        choose : false
      },
      {
        id : 4,
        content : "기계공학부",
        choose : false
      },
    ]
  }

  _changeChoose = (id) => {
    const newState = [...this.state.majors];
    // console.log(newState[0]);
    newState[id].choose = !(newState[id].choose);
    this.setState({filtering:newState});
  }

  _changeFolding = () => {
    const now_folding = this.state.isFolding;
    this.setState({isFolding: !(now_folding)})
  }

  _onCollege = () => {
    this.setState({on_college: !(this.state.on_college)})
  }

  _onDormitory = () => {
    this.setState({on_dormitory: !(this.state.on_dormitory)})
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <NavigationHeader title={"맞춤 공지 설정"} navigation={this.props.navigation} />
        {/* 여기서부터 맞춤 공지 레이아웃 */}
        <View style={styles.wrapper}>
          <Text style={styles.inner_text}>학사/장학 공지</Text>
          <TouchableOpacity onPress={this._onCollege}>
            <MaterialCommunityIcons name={this.state.on_college? "toggle-switch": "toggle-switch-off-outline"} size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.inner_text}>기숙사 공지</Text>
          <TouchableOpacity onPress={this._onDormitory}>
            <MaterialCommunityIcons name={this.state.on_dormitory? "toggle-switch": "toggle-switch-off-outline"} size={40} color="black" />
          </TouchableOpacity>
        </View>
        {/* 아코디언 메뉴 */}
        <View style={this.state.isFolding? [styles.wrapper, {backgroundColor:"#ddd"}] : styles.wrapper}>
          <Text style={styles.inner_text}>학과(학부) 공지</Text>
          <TouchableOpacity onPress={this._changeFolding}>
            <AntDesign name={this.state.isFolding? "up": "down"} size={25} color="black" />
          </TouchableOpacity>
        </View>
        {this.state.isFolding ?
          <View style={styles.folding_true}>
              <FlatList
                data={this.state.majors}
                renderItem={({item}) => (
                  <View style={styles.wrapper}>
                    <Text style={styles.inner_text}>{item.content}</Text>
                    <TouchableOpacity onPress={()=>this._changeChoose(item.id)}>
                      <MaterialCommunityIcons name={item.choose? "toggle-switch": "toggle-switch-off-outline"} size={40} color="black" />
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item)=> item.id.toString()}/>
          </View>
        : <View/>}
        {/* 여기까지 맞춤 공지 레이아웃 */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  inner_text: {
    fontSize:17,
  },
  folding_true:{
    width: "100%",
    paddingHorizontal: 20,
    // backgroundColor:"#ddd"
  },
});

