import * as React from "react";
import {View, TextInput, TouchableOpacity,Text, Alert} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import SignInStyles from "../styles/SignInStyles";
import {SafeAreaView} from "react-navigation";
import Dimensions from "react-native-web/src/exports/Dimensions";

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class SignInScreen extends React.Component {
  state = {
    id: "",
    pw: ""
  };

  render() {
    return (
      <SafeAreaView style={GlobalStyles.container}>
        {/* 여기서부터 Sign In 레이아웃 */}
        <View style={SignInStyles.container}>
          <Text style={SignInStyles.logoPosition}>Grade Fairy</Text>
          <TextInput
            style={SignInStyles.textInput}
            placeholder="아이디"
            placeholderTextColor='#888888'
            onChangeText={(id)=>this.setState({id: id})}
          />
          <TextInput
            style={SignInStyles.textInput}
            placeholder="비밀번호"
            placeholderTextColor='#888888'
            secureTextEntry={true}
            onChangeText={(pw) => this.setState({pw: pw})}
          />
          <TouchableOpacity
            onPress={() => {
              // 공백 제거
              const id = this.state.id.trim();
              const pw = this.state.pw.trim();

              if(id == "") {
                Alert.alert("아이디를 입력하세요.");
                return false;
              } else if(pw == "") {
                Alert.alert("비밀번호를 입력하세요.");
                return false;
              }

              /*로그인 루틴
              POST to /profile/login (parameter: {id: id, pw: pw}) {
                if(success) {
                  this.props.navigation.navigate("Tab");
                } else {
                  Alert.alert("아이디 또는 비밀번호가 올바르지 않습니다.");
                }
              }*/
            }}
            activeOpacity={0.8}
            hitSlop={{top:15,bottom: 15, left: 15, right: 15}}
            style={SignInStyles.button}>
            <Text style={{color:'white'}}>Sign In</Text>
          </TouchableOpacity>

          {/* 회원가입창으로 넘어가는 부분 */}
          <View style={{
            marginTop:4,
            width: 400,
            flexDirection:'row',
            justifyContent: 'space-around',
            paddingHorizontal: 20
          }}>
            <Text style={{fontSize:14}}>학점관리요정이 처음이신가요?</Text>
            <Text
              style={{
                color:'#675CF6',
                fontSize:14,
                textDecorationLine: "underline",
              }}
              onPress={() => {
            // SignUp 으로 갈 수 있는 링크 생성할 것 = 계정 생성
              this.props.navigation.navigate("SignUp");
            }}>계정 생성하기</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

