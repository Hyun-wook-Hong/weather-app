import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios"; 

const API_KEY = "082918ddc6385fa12c7e106e084f9a4b";

export default class extends React.Component {
  
  state= {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) =>{
    const { 
            data: {
              main: { temp },
              weather
            } 
          } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({       
      isLoading: false,
      condition: weather[0].main,
      temp 
    });
  }

  getLocation = async() =>{
    try{
      // react-native 공식적으로 requestPermissionsAsync가 deprecated됬다는 알림을 줌.
      //"requestPermissionsAsync" is now deprecated. Please, use "requestForegroundPermissionsAsync" or "requestBackgroundPermissionsAsync" instead.

      await Location.requestForegroundPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      console.log(latitude, longitude);
      // send this (latitude, longitude) to API and get weather
    }catch(error){
      Alert.alert("Can`t find you", "So sad");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading, temp, condition } = this.state;
    return ( isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} /> );
  }
}
// View 컴포넌트는 HTML의 div라 생각하면 됨.
// React Native에서 flex direction 기본 값은 column (세로)
// 원한다면 flexDirection : "row" 속성을 줘서 줄 수는 있음

// style 안에 flex 값을 몇줄 주느냐에 따라 차지하는 스크린 비율이 달라진다. 
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   // alignItems: 'center',
    //justifyContent: 'center',
  },
  blueView:{
    flex: 1,
    backgroundColor: 'blue'
  },
  yellowView:{
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    color: "white"
  }
});*/
