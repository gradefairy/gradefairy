import * as React from "react";
import {View, TextInput, TouchableOpacity,Text} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import SignInStyles from "../styles/SignInStyles";
import {SafeAreaView} from "react-navigation";
import Dimensions from "react-native-web/src/exports/Dimensions";

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class SignInScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style={GlobalStyles.container}>
        {/* 여기서부터 Sign In 레이아웃 */}
        <View style={SignInStyles.container}>
          <Text style={SignInStyles.logoPosition}>Grade Fairy</Text>
          <TextInput
            style={SignInStyles.textInput}
            placeholder="아이디"
            paceholderTextColor='#888888'
            onChangeText={(text)=>this.setState({username:text})}
          />
          <TextInput
            style={SignInStyles.textInput}
            placeholder="비밀번호"
            paceholderTextColor='#888888'
            secureTextEntry={true}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            hitSlop={{top:15,bottom: 15, left: 15, right: 15}}
            style={SignInStyles.button}
          >
            <Text style={{color:'white'}}>Sign In</Text>
          </TouchableOpacity>

          {/* 회원가입창으로 넘어가는 부분 */}
          <View style={{marginTop:4,width: 400,flexDirection:'row', justifyContent: 'space-around'}}>
            <Text style={{fontSize:10}}>학점관리요정이 처음이신가요?</Text>
            <Text
              style={{color:'#675CF6',fontSize:10, textDecorationLine:'underline'}}
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

