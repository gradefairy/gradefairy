import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, FlatList, AsyncStorage} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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

  componentWillMount() {
    this.getData();
  }

  storeData = () => {
    AsyncStorage.setItem('@filter:state', JSON.stringify(this.state));
  }

  getData = () => {
      AsyncStorage.getItem('@filter:state').then((state) => {
          if(state != null){
              this.setState(JSON.parse(state));
              this.setState({isFolding: false}); // 화면에 다시 들어올 때마다 아코디언 메뉴 접어놓음.
          }
      })
  }

  _changeChoose = (id) => {
    const newState = [...this.state.majors];
    // console.log(newState[0]);
    newState[id].choose = !(newState[id].choose);
    this.setState({filtering:newState}, this.storeData);
  }

  _changeFolding = () => {
    const now_folding = this.state.isFolding;
    this.setState({isFolding: !(now_folding)}, this.storeData);
  }

  _onCollege = () => {
    this.setState({on_college: !(this.state.on_college)}, this.storeData);
  }

  _onDormitory = () => {
    this.setState({on_dormitory: !(this.state.on_dormitory)}, this.storeData);
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <NavigationHeader title={"맞춤 공지 설정"} navigation={this.props.navigation} />
        {/* 여기서부터 맞춤 공지 레이아웃 */}
        <TouchableOpacity style={styles.wrapper} onPress={this._onCollege} activeOpacity={0.8}>
          <Text style={styles.inner_text}>학사/장학 공지</Text>
          <MaterialCommunityIcons name={this.state.on_college? "toggle-switch": "toggle-switch-off-outline"} size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapper} onPress={this._onDormitory} activeOpacity={0.8}>
          <Text style={styles.inner_text}>기숙사 공지</Text>
          <MaterialCommunityIcons name={this.state.on_dormitory? "toggle-switch": "toggle-switch-off-outline"} size={40} color="black" />
        </TouchableOpacity>
        {/* 아코디언 메뉴 */}
        <TouchableOpacity 
            style={this.state.isFolding? [styles.wrapper, {backgroundColor:"#ddd"}] : styles.wrapper}
            onPress={this._changeFolding} 
            activeOpacity={0.8}>
          <Text style={styles.inner_text}>학과(학부) 공지</Text>
          <AntDesign name={this.state.isFolding? "up": "down"} size={25} color="black" />
        </TouchableOpacity>
        {this.state.isFolding ?
          <View style={styles.folding_true}>
              <FlatList
                data={this.state.majors}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.wrapper} onPress={()=>this._changeChoose(item.id)} activeOpacity={0.8}>
                    <Text style={styles.inner_text}>{item.content}</Text>
                    <MaterialCommunityIcons name={item.choose? "toggle-switch": "toggle-switch-off-outline"} size={40} color="black" />
                  </TouchableOpacity>
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

