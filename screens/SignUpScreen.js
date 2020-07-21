import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-navigation";

export default class SignUpScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* 여기서부터 지워도 되는 부분 */}
        <Text>SignUp.js</Text>
        <Text onPress={() => {
          // Tab 으로 갈 수 있는 링크 생성할 것 = 회원가입 완료
          this.props.navigation.navigate("Tab");
        }}>Sign Up</Text>
        {/* 여기까지 지워도 되는 부분 */}

        {/* 여기서부터 SignUp 레이아웃 */}
        {/* 여기까지 SignUp 레이아웃 */}
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
