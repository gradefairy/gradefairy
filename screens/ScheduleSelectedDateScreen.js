import * as React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import ScheduleDetail from "./ScheduleDetailScreen";

const UPCOMING_DATA = [{
  id: 1,
  category: "tasks",
  title: "알고리즘 과제 마감",
  time: ["18:00", "19:00"],
  date: ["", "2020-08-12"]
}, {
  id: 2,
  category: "meeting",
  title: "팀프로젝트 회의",
  time: ["18:00", "19:00"],
  date: ["", "2020-08-12"]
}, {
  id: 3,
  category: "etc",
  title: "인공지능 컨퍼런스",
  time: ["18:00", "19:00"],
  date: ["", "2020-08-18"]
}];

/*달력 SCHEDULE_CATEGORY color */
const SCHEDULE_CATEGORY = {
  tasks: {
    key: "tasks",
    text: "과제",
    color: "#FF7272"
  },
  meeting: {
    key: "meeting",
    text: "회의",
    color: "#FFB35D"
  },
  etc: {
    key: "etc",
    text: "기타",
    color: "#67B8FF"
  }
};

const ScheduleDetailScreen = () => (
  <View style={GlobalStyles.container}>
    <ScheduleDetail/>
  </View>
);

export default class ScheduleSelectedDateScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upcomingContainer}>
          <Text style={styles.upcomingHeader}>Today's lists</Text>
          <FlatList
            data={UPCOMING_DATA}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.upcomingList}
                onPress={() => {this.props.navigation.navigate("ScheduleDetailScreen");}}>
                <View style={[
                  styles.upcomingLabel,
                  {backgroundColor: SCHEDULE_CATEGORY[item.category].color}
                ]}>
                  <Text style={styles.upcomingLabelText}>{SCHEDULE_CATEGORY[item.category].text}</Text>
                </View>
                <View style={styles.upcomingContent}>
                  <View style={styles.upcomingTitle}>
                    <Text>{item.title}</Text>
                  </View>
                  <Text style={styles.upcomingDate}>
                    {(item.time[0] != "") ? `${item.time[0]}` : ``}
                    {(item.date[0] != "") ? `, ${item.date[0]}` : ``}
                    {` ~ ${item.time[1]}, `}
                    {item.date[1]}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    // marginLeft: 30,
  },
  upcomingContainer: {
    paddingHorizontal: 10,
  },
  upcomingHeader: {
    color:'#000000',
    marginBottom: 10,
    fontSize:20,
    fontWeight:'700',
    marginLeft : 70,
    marginTop:10,

  },
  upcomingList: {
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
    padding: 10,
    flexDirection: "row",
  },
  upcomingLabel: {
    width: 50,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 10
  },
  upcomingLabelText: {
    color: "white"
  },
  upcomingContent: {
    flex: 1
  },
  upcomingTitle: {
    height: 25,
    justifyContent: "center"
  },
  upcomingDate: {
    color: "#bfbfbf"
  },
})
