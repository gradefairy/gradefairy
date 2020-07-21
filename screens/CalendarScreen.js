import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import Modal from "react-native-modal";
import {Ionicons} from "@expo/vector-icons";
import {SafeAreaView} from "react-navigation";
import {LocaleConfig, CalendarList} from "react-native-calendars";

const {width, height} = Dimensions.get("window");

/* Calendar naming */
LocaleConfig.locales["kr"] = {
  monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘"
};
LocaleConfig.defaultLocale = "kr";

const CalendarModal = ({calendar}) => (
  <Modal
    isVisible={calendar.state.isModalVisible}>
    <View style={styles.modal}>
      <View style={styles.modalContainer}>
        {/* 모달 팝업 헤더 */}
        <View style={styles.modalHeader}>
          {/* 모달 팝업 헤더 제목 */}
          <Text style={styles.modalHeaderTitle}>일정 추가하기</Text>
          {/* 모달 팝업 닫기 버튼 */}
          <TouchableOpacity
            onPress={() =>
              calendar.setState({isModalVisible: !calendar.state.isModalVisible})
            }
            style={styles.modalCloseBtn}>
            <Ionicons name={"ios-close"} size={24} />
          </TouchableOpacity>
        </View>
        {/* 여기서부터 모달 팝업 내용 */}
        {/* 여기까지 모달 팝업 내용 */}
      </View>
    </View>
  </Modal>
);

export default class CalendarScreen extends React.Component {
  state = {
    isModalVisible: false
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
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* 모달 팝업 */}
        <CalendarModal calendar={this} />
        <View>
          <View style={styles.calendarHeader}>
            <TouchableOpacity>
              <Ionicons name={"ios-search"} size={24} />
            </TouchableOpacity>
            <Text style={styles.calendarHeaderTitle}>
              {this.state.calendar.year}년 {this.state.calendar.month}월
            </Text>
            <TouchableOpacity onPress={() => {
              this.setState({isModalVisible: !this.state.isModalVisible});
            }}>
              <Ionicons name={"ios-add"} size={24} />
            </TouchableOpacity>
          </View>
          <CalendarList
            current={new Date()}
            horizontal={true}
            renderHeader={() => (null)}
            pagingEnabled={true}
            onVisibleMonthsChange={(months) => {
              // onVisibleMonthsChange로 state를 변경할 시
              // 달력을 완전히 렌더링하지 못하는 문제가 있어 딜레이 추가
              setTimeout(() => {
                this.setState({
                  calendar: {
                    year: months[0].year,
                    month: months[0].month
                  }
                });
              })
            }}
          />
          {/* 여기서부터 일정 리스트 */}
          {/* 여기까지 일정 리스트 */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  calendarHeader: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30
  },
  calendarHeaderTitle: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    width: "100%",
    height: "90%",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10
  },
  modalHeader: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  modalHeaderTitle: {
    fontWeight: "bold",
    fontSize: 18
  },
  modalCloseBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
