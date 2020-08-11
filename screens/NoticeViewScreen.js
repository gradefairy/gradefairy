import React from "react";
import {View, Text, StyleSheet, Linking} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";
import { FontAwesome, EvilIcons } from '@expo/vector-icons';

export default class NoticeViewScreen extends React.Component {
  render() {
    const noticeData = this.props.route.params;
    return (
      <View style={GlobalStyles.container}>
        <NavigationHeader title={"공지사항"} navigation={this.props.navigation} />
        <View style={styles.header}>
          <Text style={styles.title}>{noticeData.title}</Text>
          <Text></Text>
          <Text style={styles.writer}>작성자 : 학부사무실 (leeyj82@hanyang.ac.kr)</Text>
          <Text style={styles.date}>작성일 : {noticeData.date}   조회수 : 250</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.attached}>
            <FontAwesome name="file" size={15} color="black" style={{marginRight:10, color:"gray"}} />
            <Text onPress={() => Linking.openURL('http://cs.hanyang.ac.kr/admin/bbs/down.php?code=notice&idx=28942&no=1')}>
              2020-2학기 교내 장학 2차신청 안내문(컴소).hwp
              {/* {(item.title.length > 22) ? `${item.title.substr(0, 22)}...` : item.title} */}
              </Text>
          </View>
          <View style={styles.content}>
            <Text>{`2020-2학기 교내장학 2차 신청일정을 다음과 같이 안내드리니, 첨부된 파일을 참고하여 신청 바랍니다.


1. 신청 및 서류 접수일정
 가. HY-in(교내장학) 2차 신청 : 2020. 7. 8(수) ~ 7. 17(금) 24:00 까지

위 기간내에만 교내장학 신청서 작성(입력)/ 업로드 가능
* 이번 2차신청은 재학생이 신청할 수 있는 마지막 신청기간입니다.`}</Text>
          </View>
          <View style={styles.link}>
            <EvilIcons name="external-link" size={20} color="gray" style={{marginRight:3}} />
            <Text style={{color: 'gray', borderBottomWidth:1, borderBottomColor:"gray"}}
                    onPress={() => Linking.openURL('http://cs.hanyang.ac.kr/board/info_board.php?ptype=view&idx=28942&page=&code=notice')}>
            원본 페이지 바로가기
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header : {
    backgroundColor:"#eee",
    padding:20,
    borderBottomColor: "#ccc",
    borderBottomWidth:1,
    borderTopColor: "black",
    borderTopWidth:1,
  },
  title :{
    fontSize:18,
  },
  writer : {
    fontSize:11,
    color:"gray",
  },
  date : {
    fontSize:11,
    color:"gray",
  },
  body : {
    margin:20,
  },
  attached : {
    backgroundColor:"#eee",
    padding:8,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,

    flexDirection:'row',
    alignItems:"center"
  },
  content:{

  },
  link : {
    marginTop: 20,
    flexDirection:"row",
    alignItems: "center"
  }
});