import * as React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import NavigationHeader from "../components/NavigationHeader";

export default class ScheduleDetailScreen extends React.Component {
  state ={
    onTasks : true,
  }

  onPressToggle = ()=>{
    this.setState({onTasks:!this.state.onTasks});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upcomingList}>
          <View style={[
            styles.upcomingLabel,
            {backgroundColor: '#FF7272'}
            ]}>
            <Text style={styles.upcomingLabelText}>과제</Text>
          </View>
          <View style={styles.upcomingContent}>
            <View style={styles.upcomingTitle}>
              <Text>알고리즘 과제</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailType}>
          <Text>시간</Text>
          <Text style={styles.detailContents}>
                18:00 ~ 19:00, 2020년 08월 12일
          </Text>
        </View>
        <View style={styles.detailType}>
          <Text>장소</Text>
          <Text style={styles.detailContents}>
            백남학술 정보관 3층
          </Text>
        </View>
        <View style={styles.detailType}>
          <Text>메모</Text>
          <Text style={styles.detailContents}>
            노트북 챙겨서 가기
          </Text>
        </View>
        <View style={[
          styles.detailType,
          {flexDirection:'row'},
          {justifyContent:'space-between'},
          ]}>
          <Text>알림 여부</Text>
          <SwitchToggle
            containerStyle={styles.toggleBar}
            backgroundColorOn="#07BA6D"
            backgroundColorOff="#E5E1E0"
            circleStyle={styles.toggleCircle}
            switchOn={this.state.onTasks}
            onPress={this.onPressToggle}
            circleColorOff="#FFFFFF"
            circleColorOn="#FFFFFF"
            duration={500}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    marginLeft: 30,
  },
  upcomingList: {
    padding: 20,
    flexDirection: "row",
    alignItems:'center',
    // marginLeft: 70,
  },
  upcomingLabel: {
    width: 50,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 10,
  },
  upcomingLabelText: {
    color: "white"
  },
  upcomingContent: {
    flex: 1,
  },
  upcomingTitle: {
    height: 25,
    justifyContent: "center"
  },

  detailType: {
    padding : 10,
  },
  detailContents:{
      color: "#bfbfbf"
  },
  toggleBar:{
    width: 60,
    height: 25,
    borderRadius: 30,
    padding: 5,
    marginRight: 30
  },
  toggleCircle:{
    width:18,
    height: 18,
    borderRadius: 27.5,
    backgroundColor: "#B8EDF2"
  }
})
