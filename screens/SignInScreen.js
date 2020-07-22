import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-navigation";

export default class SignInScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* 여기서부터 지워도 되는 부분 */}
        <Text>SignIn.js</Text>
        <Text onPress={() => {
          // SignUp 으로 갈 수 있는 링크 생성할 것 = 계정 생성
          this.props.navigation.navigate("SignUp");
        }}>계정 생성하기</Text>
        {/* 여기까지 지워도 되는 부분 */}

        {/* 여기서부터 Sign In 레이아웃 */}
        {/* 여기까지 Sign In 레이아웃 */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});