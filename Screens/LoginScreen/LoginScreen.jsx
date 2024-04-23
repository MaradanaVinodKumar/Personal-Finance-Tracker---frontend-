import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import backgroundImage from "../../assets/Login/background.png"


const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;
export default function LoginScreen() {
    return (
        <View style={styles.LoginScreenContainer}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    LoginScreenContainer: {
        flex: 1,
        backgroundColor: "#DFFDE6"
    },
    backgroundImage: {
        height: height,
        width: width,
        position: "absolute"
    },
})