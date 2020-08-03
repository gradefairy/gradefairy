import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Alert} from "react-native";
import Modal from "react-native-modal";
import GlobalStyles from "../styles/GlobalStyles";
import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from "@expo/vector-icons";
import {CalendarList, LocaleConfig} from "react-native-calendars";

const UpcomingListModal = ({calendar}) => (
  <Modal
    isVisible={calendar.state.isUpcomingListVisible}
    swipeDirection={"down"}
    onSwipeComplete={() => calendar.setState({isUpcomingListVisible: !calendar.state.isUpcomingListVisible})}
    useNativeDriver={true}>
    <View style={styles.modal}>
      <View style={styles.modalContainer}>
        {/* 여기서부터 upcoming list modal */}
        <Text>UpcomingListModal</Text>
        {/* 여기까지 upcoming list modal */}
      </View>
    </View>
  </Modal>
);

const Stack = createStackNavigator();
const ScheduleDetailScreen = () => (
  <View style={GlobalStyles.container}>
    <Text>ScheduleDetailScreen</Text>
  </View>
);
const ScheduleFormScreen = () => (
  <View style={GlobalStyles.container}>
    <Text>ScheduleFormScreen</Text>
  </View>
);

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

/* upcoming 예시 데이터 */
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

LocaleConfig.locales["kr"] = {
  monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘"
};
LocaleConfig.defaultLocale = "kr";

class CalendarViewScreen extends React.Component {
  state = {
    selectedDate: false,
    calendar: false,
    isUpcomingListVisible: false
  };
  constructor(props) {
    super(props);
    const today = new Date();
    this.state.selectedDate = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate()
    };
    this.state.calendar = {
      year: this.state.selectedDate.year,
      month: this.state.selectedDate.month
    };
  }
  calendarRenderDelay = (months) => {
    this.setState({
      calendar: {
        year: months[0].year,
        month: months[0].month
      }
    });
  }
  render() {
    return (
      <View style={GlobalStyles.container}>
        <UpcomingListModal calendar={this} />
        <View style={styles.calendarHeader}>
          <TouchableOpacity>
            <Ionicons name={"ios-search"} size={24}
              onPress={() => {Alert.alert("onPress search");}}
            />
          </TouchableOpacity>
          <Text style={styles.calendarHeaderTitle}>
            {this.state.calendar.year}년 {this.state.calendar.month}월
          </Text>
          <TouchableOpacity>
            <Ionicons name={"ios-add"} size={24}
              onPress={() => {this.props.navigation.navigate("ScheduleFormScreen");}}/>
          </TouchableOpacity>
        </View>
        <CalendarList
          current={new Date()}
          horizontal={true}
          renderHeader={() => (null)}
          pagingEnabled={true}
          theme={{
            todayTextColor: '#675CF6',
          }}
          markingType={"multi-dot"}
          markedDates={{
            '2020-08-12': {dots:[SCHEDULE_CATEGORY.tasks, SCHEDULE_CATEGORY.meeting]},
            '2020-08-18': {dots:[SCHEDULE_CATEGORY.etc]},
          }}
          onDayPress={() => { this.setState({isUpcomingListVisible: !this.state.isUpcomingListVisible}); }}
          onVisibleMonthsChange={(months) => {
            setTimeout(() => this.calendarRenderDelay(months));
          }}
        />
        <View style={styles.upcomingContainer}>
          <Text style={styles.upcomingHeader}>Upcoming</Text>
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

export default function CalendarScreen() {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Navigator
        initialRouteName={"CalendarViewScreen"}
        headerMode={"none"}>
        <Stack.Screen name={"ScheduleDetailScreen"} component={ScheduleDetailScreen} />
        <Stack.Screen name={"ScheduleFormScreen"} component={ScheduleFormScreen} />
        <Stack.Screen
          name={"CalendarViewScreen"}
          component={CalendarViewScreen} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarHeader: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  calendarHeaderTitle: {
    fontSize: 18
  },
  upcomingContainer: {
    paddingHorizontal: 10,
  },
  upcomingHeader: {
    color:'#BFBFBF',
    marginBottom: 10
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
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    backgroundColor: "white",
    width: "85%",
    height: "70%",
    borderRadius: 10
  }
});
