import * as React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export default function NoticeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.makerow}>          
          <TouchableOpacity style={styles.filter}>
            <FontAwesome5 name="filter" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.head_text}>
            <Text style={{fontSize:18}}>공지사항</Text>
          </View>
          <TouchableOpacity style={styles.search}>
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>

        </ScrollView>
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header : {
    height:68,
    // backgroundColor:"gray",
    justifyContent:"center",
    paddingTop: 19
  },
  makerow:{
    flexDirection: 'row',
  },
  filter : {
    // backgroundColor:"white",
    width:width/3 - width/6,
    height:49,
    justifyContent:"center",
    alignItems:"center"
  },
  head_text: {
    // backgroundColor:"red",
    width:width/3 + width/3,
    height:49,
    justifyContent:"center",
    alignItems:"center"
  },
  search: {
    // backgroundColor:"green",
    width:width/3 - width/6,
    height:49,
    justifyContent:"center",
    alignItems:"center"
  },
  body : {
    height:height-68,
    backgroundColor:"gray",
  },

});
