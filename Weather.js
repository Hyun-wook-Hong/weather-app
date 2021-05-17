/* props */
import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes  from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
      Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Thunderstorm: {
        iconName: "",
        gradient: []
      },
      Drizzle: {
        iconName: "",
        gradient: []
      },
      Rain: {
        iconName: "",
        gradient: []
      },
      Snow: {
        iconName: "",
        gradient: []
      },
      Atmosphere: {
        iconName: "",
        gradient: []
      },
      Clear: {
        iconName: "",
        gradient: []
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#232526", "#414345"]
      },
      Haze: {
        iconName: "",
        gradient: []
      },
      Mist: {
        iconName: "",
        gradient: []
      },
      Dust: {
        iconName: "",
        gradient: []
      }
}

export default function Weather({ temp, condition }){

    /*
        각각 flex 1
        View1: (온도, 아이콘)
        View2: (정보)
    */
    return (
            <LinearGradient
                        // Background Linear Gradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
                >
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
                <View style={styles.halfContainer}></View>
            </LinearGradient>
        );

}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});