import { ActivityIndicator, Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import backgroundImage from "../../assets/splashScreen/background.png"
import logo from "../../assets/splashScreen/logo.png"
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;

export default function SplashScreen() {

    const navigater = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigater.navigate("Login");
        }, 2000);

    }, [])

    return (
        <View style={styles.SplashScreenContiner}>
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
        backgroundColor: "#DFFDE6",
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