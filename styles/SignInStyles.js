import React from "react";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:'#F5F5F5',
    alignItems:'center',
    justifyContent:'center',
  },
  logoPosition : {
    fontSize :40,
    color : 'black',
    fontWeight : '800',
    marginBottom: 30,
  },
  textInput : {
    marginTop: 5,
    marginBottom: 5,
    width:300,
    height: 40,
    borderColor : '#DDDDDD',
    borderWidth : 1,
    borderRadius : 25,
    padding: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 15
  },
  button : {
    marginTop:10,
    backgroundColor : '#675CF6',
    borderColor : '#5A50E9',
    borderWidth: 3,
    borderRadius : 25,
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorization:{
    marginTop:10,
    backgroundColor : '#1C5CA4',
    borderColor : '#4B94E8',
    borderWidth : 3,
    borderRadius : 25,
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

});