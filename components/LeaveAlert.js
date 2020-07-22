import React from "react";
import {Alert} from "react-native";

export default function LeaveAlert() {
  return (
    Alert.alert(
      /* 알림창 제목 */
      "탈퇴하시겠습니까?",
      /* 알림창 내용 */
      "Content",
      [{
        text: "예",
        onPress: () => {
          /* 여기서부터 예 버튼을 누른 경우 */
          console.log("회원 탈퇴");
          /* 여기까지 예 버튼을 누른 경우 */
        }
      }, {
        text: "아니오",
        onPress: () => {
          /* 여기서부터 아니오 버튼을 누른 경우 */
          console.log("회원 탈퇴 취소");
          /* 여기까지 아니오 버튼을 누른 경우 */
        }
      }]
    )
  );
}
