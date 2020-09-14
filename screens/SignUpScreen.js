import * as React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import SignInStyles from "../styles/SignInStyles";

export default class SignUpScreen extends React.Component {
  state = {
    id: "",
    pw: "",
    pw_: "",
    name: ""
  };

  render() {
    return (
      <View style={GlobalStyles.container}>
        {/* 여기서부터 SignUp 레이아웃 */}
        <View style={SignInStyles.container}>
          <Text style={SignInStyles.logoPosition}>Grade Fairy</Text>
          <TextInput
            style={SignInStyles.textInput}
            placeholder='아이디'
            onChangeText={(id) => this.setState({id: id})}
            // onChangeText={(text)=>this.setState({username:text})}
          />
          <TextInput
            style={SignInStyles.textInput}
            secureTextEntry={true}
            placeholder='비밀번호'
            onChangeText={(pw) => this.setState({pw: pw})}
          />
           <TextInput
            style={SignInStyles.textInput}
            secureTextEntry={true}
            placeholder='비밀번호 확인'
            onChangeText={(pw_) => this.setState({pw_: pw_})}
           />
           <TextInput
            style={SignInStyles.textInput}
            placeholder='이름'
            onChangeText={(name) => this.setState({name: name})}
          />
          {/* 한양대학교 인증 확인 버튼 */}
          {/*<View>*/}
          {/*  <Text*/}
          {/*    style={{fontSize:14, color:'#888888'}}>학점관리요정을 사용하려면 학교인증이 필요합니다.</Text>*/}
          {/*  <TouchableOpacity*/}
          {/*    activeOpacity={0.8}*/}
          {/*    style={SignInStyles.authorization}>*/}
          {/*    <Text style={{color:'white'}}>한양대학교 학생 인증하기</Text>*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}
          <TouchableOpacity
            activeOpacity={0.8}
            style={SignInStyles.button}
            onPress={() => {
              const id = this.state.id.trim();
              const pw = this.state.pw.trim();
              const pw_ = this.state.pw_.trim();
              const name = this.state.name.trim();

              if(id == "") {
                Alert.alert("아이디를 입력하세요.")
                return false;
              } else if(pw == "") {
                Alert.alert("비밀번호를 입력하세요.");
                return false;
              } else if(pw_ == "") {
                Alert.alert("비밀번호 확인란을 입력하세요.");
                return false;
              } else if(name == "") {
                Alert.alert("이름을 입력하세요.");
                return false;
              } else if(pw != pw_) {
                Alert.alert("비밀번호가 서로 일치하지 않습니다.");
                return false;
              }

              /*회원가입 루틴
              POST to /profile/post (parameter: {id: id, pw: pw, name: name}) {
                if(success) {
                  login 활성화
                  this.props.navigation.navigate("Tab");
                } else {
                  Alert.alert("오류가 발생했습니다. 다시 시도하시기 바랍니다.");
                }
              }*/
            }}>
            <Text style={{color:'white'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
