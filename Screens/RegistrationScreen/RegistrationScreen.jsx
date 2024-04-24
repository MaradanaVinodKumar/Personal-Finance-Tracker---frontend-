import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import logo from "../../assets/splashScreen/logo.png"
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function RegistrationScreen() {
    const navigator = useNavigation();
    return (
        <View style={styles.RegistrationScreenContainer}>
            <View style={styles.logoBackground}>
                <Image source={logo} style={styles.logos} />
                <Text style={styles.appName}>Sign Up</Text>
                <Text style={styles.appName}>Personal Finance Tracker</Text>
            </View>
            <View style={styles.FieldBackground}>
                <View>
                    <Text style={styles.lable}>First Name</Text>
                </View>
                <View style={{ width: "70%", }}>
                    <TextInput style={styles.input} />
                </View>
                <View>
                    <Text style={styles.lable}>Last Name</Text>
                </View>
                <View style={{ width: "70%", }}>
                    <TextInput style={styles.input} />
                </View>
                <View>
                    <Text style={styles.lable}>Age</Text>
                </View>
                <View style={{ width: "70%", }}>
                    <TextInput style={styles.input} keyboardType='number-pad' />
                </View>
                <View>
                    <Text style={styles.lable}>Occupation</Text>
                </View>
                <View style={{ width: "70%", }}>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.SingUpBg}>
                <Text style={styles.SignUpText}>If you have already account. </Text>
                <TouchableOpacity onPress={() => { navigator.navigate("Login") }}><Text style={styles.SignUpBtn}>Sign In</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    RegistrationScreenContainer: {
        flex: 1,
        backgroundColor: "#DFFDE6",
    },
    logoBackground: {

        flexDirection: "column",
        paddingTop: "20%",
        alignItems: "center",
    },
    logos: {
        width: 100,
        height: 100,

    },
    appName: {
        fontSize: 30,
        fontWeight: '500',
    },
    FieldBackground: {

        width: "100%",
        justifyContent: "center",
        marginTop: "5%"
    },
    lable: {
        paddingLeft: "22%",
        marginTop: "8%",
        marginBottom: 13,
        color: "#bebbbb"

    }, input: {
        borderBottomWidth: 2,
        borderColor: "#00A82F",
        width: "90%",
        fontSize: 25,
        marginLeft: "30%",
        color: "#000000"
    }, SingUpBg: {
        marginTop: "43%",
        bottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",

    },
    SignUpText: {
        fontSize: 20,
        fontWeight: "500"
    },
    SignUpBtn: {
        fontSize: 20,
        color: "#00A82F",
        fontWeight: "500"
    }
})