/* props */
import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes  from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
      Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#283048", "#859398"],
        title: "Thunderstorm",
        subtitle: "Just don`t go outside.",
      },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Many a little makes a mickle.",
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#4b6cb7", "#182848"],
        title: "Rain",
        subtitle: "Why does it always rain on me?",
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you wanna build a snow man?",
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Be careful while you drive.",
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny",
        subtitle: "Sooooo clear today.",
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#232526", "#414345"],
        title: "Clouds",
        subtitle: "There is no sunshine But it's okay to work out, man!"
      },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Be careful while you drive."
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "Be careful while you drive."
      },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "I hate this from China 😷"
      },
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
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
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
    ]).isRequired,
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
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle:{
        fontWeight: "600",
        fontSize: 24,
        color: "white",
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start",
    }
});