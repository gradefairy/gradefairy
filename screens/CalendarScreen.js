import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions,TextInput} from "react-native";
import Modal from "react-native-modal";
import {Ionicons} from "@expo/vector-icons";
import {SafeAreaView} from "react-navigation";
import {LocaleConfig, CalendarList} from "react-native-calendars";
// import DatePicker from "react-native-date-picker";
import SwitchToggle from "react-native-switch-toggle";

const {width, height} = Dimensions.get("window");

/*달력 Dot color */
const tasks = {key:'tasks', color: '#FF7272'};
const meeting= {key:'meeting', color: '#FFB35D'};
const etc = {key:'etc', color: '#67B8FF'};


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
        <View>
          <View style={styles.contentDetail}>
            <Text>시간</Text>
            <TextInput style={styles.contentDate}/>
          </View>
          <View style={styles.contentDetail}>
            <Text>장소</Text>
            <TextInput style={styles.contentDate}/>
          </View>
          <View style={styles.contentDetail}>
            <Text>메모</Text>
            <TextInput style={styles.contentDate}/>
          </View>
          <View style={styles.contentDetail}>
            <Text>알림 여부</Text>

          </View>
        </View>
        {/* 여기까지 모달 팝업 내용 */}
      </View>
    </View>
  </Modal>
);

const UpcomingModal = ({calendar}) => (
  <Modal
    isVisible={calendar.state.isModalVisible}>
    <View style={styles.modal}>
      <View style={styles.modalContainer}>
        {/* 모달 팝업 헤더 */}
        <View style={[styles.modalHeader,{flexDirection:'row'}]}>
          {/* 모달 팝업 헤더 제목 */}
            <View style={[styles.colorMark,{backgroundColor: '#FF7272'}]}>
              <Text style={{color:'#FFFFFF', textAlign:'center'}}>과제</Text>
            </View>
            <Text style={{paddingLeft: 10}}>알고리즘 과제 마감</Text>
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
        <View>
          <View style={styles.contentDetail}>
            <Text>시간</Text>
            <Text style={styles.contentDate}>18:00~ 19:00 2020년 7월 12일</Text>
          </View>
          <View style={styles.contentDetail}>
            <Text>장소</Text>
            <Text style={styles.contentDate}>백남학술 정보관 3층</Text>
          </View>
          <View style={styles.contentDetail}>
            <Text>메모</Text>
            <Text style={styles.contentDate}>노트북 지참</Text>
          </View>
          <View style={styles.contentDetail}>
            <View style={{flexDirection:'row'}}>
              <Text>알림 여부</Text>
              <SwitchToggle
                containerStyle={{
                  width: 60,
                  height: 26,
                  borderRadius: 30,
                  padding: 5,
                }}
                backgroundColorOn="#a0e1e5"
                backgroundColorOff="#e5e1e0"
                circleStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: 27.5,
                  backgroundColor: "blue" // rgb(102,134,205)
                }}
                switchOn={calendar.state.onTasks}
                onPress={calendar.onPressToggle}
                circleColorOff="#000000"
                circleColorOn="green"
                duration={500}
              />
            </View>
            <Text style={styles.contentDate}>레이아웃 미정</Text>
          </View>
        </View>
        {/* 여기까지 모달 팝업 내용 */}
      </View>
    </View>
  </Modal>
);

export default class CalendarScreen extends React.Component {
  state = {
    isModalVisible: false,
    onTasks : false,
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

  onPressToggle = ()=>{
    this.setState({onTasks:!this.state.onTasks});
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
            /* dot marking 해주는 부분*/
            markedDates={{
              '2020-07-12': {dots:[tasks, meeting]},
              '2020-07-17': {marked: true},
              '2020-07-18': {dots:[etc]},
            }}
            markingType={'multi-dot'}
            /*이까지 나중에는 일정 날짜 받아서 표시해주기*/
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
          <View style={{marginLeft:20}}>
            <Text style={{color:'#BFBFBF', marginBottom: 10}}>Upcoming</Text>
            {/*공지 하나*/}
            <UpcomingModal calendar={this} />
            <TouchableOpacity style={styles.upcomingList} onPress={() => {
              this.setState({isModalVisible: !this.state.isModalVisible});
            }}>
              <View style={styles.upcomingContents}>
                <View style={[styles.colorMark,{backgroundColor: '#FF7272'}]}>
                  <Text style={{color:'#FFFFFF', textAlign:'center'}}>과제</Text>
                </View>
                <Text style={{paddingLeft: 10}}>알고리즘 과제 마감</Text>
              </View>
              <Text style={styles.noticeDate}>18:00~ 19:00 2020년 7월 12일</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.upcomingList} >
              <View style={styles.upcomingContents}>
                <View style={[styles.colorMark, {backgroundColor:'#FFB35D'}]}>
                  <Text style={{color:'#FFFFFF', textAlign:'center'}}>회의</Text>
                </View>
                <Text style={{paddingLeft: 10}}>팀프로젝트 회의</Text>
              </View>
              <Text style={styles.noticeDate}>18:00~ 19:00 2020년 7월 12일</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.upcomingList}>
              <View style={styles.upcomingContents}>
                <View style={[styles.colorMark, {backgroundColor:'#67B8FF'}]}>
                  <Text style={{color:'#FFFFFF', textAlign:'center'}}>기타</Text>
                </View>
                <Text style={{paddingLeft: 10}}>인공지능 컨퍼런스</Text>
              </View>
              <Text style={styles.noticeDate}>18:00~ 19:00 2020년 7월 18일</Text>
            </TouchableOpacity>


          </View>
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
  },
  upcomingList:{
    padding:10,
  },
  upcomingContents:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
  },
  colorMark:{
    width: 50,
    height: 25,
    borderRadius: 15,
  },
  noticeDate:{
    paddingLeft: 60,
    paddingBottom: 15,
    color:'#BFBFBF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2'
  },
  contentDetail:{
    padding: 10,
    marginRight : 50
  },
  contentDate:{
    color:'#BFBFBF',
    paddingLeft: 15,
  }

});
