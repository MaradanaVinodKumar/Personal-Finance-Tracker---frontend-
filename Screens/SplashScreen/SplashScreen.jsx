import { ActivityIndicator, Dimensions, Image, ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import backgroundImage from "../../assets/splashScreen/background.png"
import logo from "../../assets/splashScreen/logo.png"
import LoginScreen from '../LoginScreen/LoginScreen';

const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;

export default function SplashScreen() {

    const [direction, setDirection] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDirection(true);
        }, 1000);

    }, [])


    if (direction) {
        return (
            <LoginScreen />
        )
    }

    return (
        <View style={styles.SplashScreenContiner}>
            <StatusBar backgroundColor='#ffffff' />
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} />
            <View style={styles.logoBackground}>
                <Image source={logo} style={styles.logos} />
                <Text style={styles.appName}>Personal Finance Tracker</Text>
                <ActivityIndicator size={50} color={"green"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    SplashScreenContiner: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    backgroundImage: {
        height: height,
        width: width,
        position: "absolute"
    },
    logos: {
        width: 200,
        height: 200,
        marginBottom: "5%"
    },
    logoBackground: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    appName: {
        fontSize: 40,
        fontWeight: '500',
    }

})