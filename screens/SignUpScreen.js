import * as React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import SignInStyles from "../styles/SignInStyles";

export default class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={GlobalStyles.container}>
        {/* 여기서부터 SignUp 레이아웃 */}
        <View style={SignInStyles.container}>
          <Text style={SignInStyles.logoPosition}>Grade Fairy</Text>
          <TextInput
            style={SignInStyles.textInput}
            placeholder='아이디'
            // onChangeText={(text)=>this.setState({username:text})}
          />
          <TextInput
            style={SignInStyles.textInput}
            placeholder='비밀번호'
          />
           <TextInput
            style={SignInStyles.textInput}
            placeholder='비밀번호 확인'
           />
           <TextInput
            style={SignInStyles.textInput}
            placeholder='이름'
          />
          <View>
            <Text
              style={{fontSize:8, color:'#888888'}}>학점관리요정을 사용하려면 학교인증이 필요합니다.</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={SignInStyles.authorization}>
              <Text style={{color:'white'}}>한양대학교 학생 인증하기</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={SignInStyles.button}
            onPress={() => {
              // Tab 으로 갈 수 있는 링크 생성할 것 = 회원가입 완료
              this.props.navigation.navigate("Tab");
            }}>
            <Text style={{color:'white'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
