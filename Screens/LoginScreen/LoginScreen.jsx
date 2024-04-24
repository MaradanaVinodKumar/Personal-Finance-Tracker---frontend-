import { StyleSheet, View, Image, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import backgroundImage from "../../assets/Login/background.png"
import logo from "../../assets/splashScreen/logo.png"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;
export default function LoginScreen() {
    const navigator = useNavigation();
    const input = useRef([]);
    const [getInputs, setInputs] = useState(['', '', '', '']);

    const handleInputChange = (event, indexRef) => {
        console.log(event.nativeEvent.key)

        if ((event.nativeEvent.key) != "Backspace") {
            if (indexRef != 3) {
                input.current[indexRef + 1].focus();
            }
            if (getInputs.every((value) => { return (value != '') && (value != 'undefined') })) {
                console.log(getInputs.join(""))
                //getInputs.join("") this for retun the value to validate user
            }
        }
    }
    const handleOnChange = (value, index) => {
        let updatedValues = getInputs;
        updatedValues[index] = "" + value;
        setInputs(updatedValues);
    }

    return (
        <View style={styles.LoginScreenContainer}>

            {/* <ImageBackground source={backgroundImage} style={styles.backgroundImage} /> */}
            <View style={styles.logoBackground}>
                <Image source={logo} style={styles.logos} />
                <Text style={styles.welcomeName}>Welcome back!</Text>
                <Text style={styles.appName}>Sign In</Text>
                <Text style={styles.appName}>Personal Finance Tracker</Text>
            </View>
            <View style={styles.FieldBackground}>
                <View>
                    <Text style={styles.lable}>Enter phone number or e-mail</Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginLeft: "4%" }}>
                    <View style={{ marginRight: 10 }}>
                        <Icon name='user' size={30} color={"#00A82F"} />
                    </View>
                    <View style={{ width: "70%", }}>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View>
                    <Text style={styles.lable}>Enter 4 digit pin</Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginLeft: "3%" }}>
                    <View style={{ marginRight: 10 }}>
                        <Icon name='lock' size={30} color={"#00A82F"} />
                    </View>

                    {getInputs.map((value, index) => {
                        return (
                            <View style={{ width: "16.25%" }} key={index}>
                                <TextInput style={styles.input} defaultValue={value} maxLength={1} ref={inputs => { input.current[index] = inputs }} onChangeText={(value) => { handleOnChange(value, index) }} onKeyPress={(event) => { handleInputChange(event, index) }} keyboardType='number-pad' />
                            </View>
                        )
                    })}
                </View>

            </View>
            <View style={styles.SingUpBg}>
                <Text style={styles.SignUpText}>If you don’t have  account. </Text>
                <TouchableOpacity onPress={() => { navigator.navigate("Registration") }}><Text style={styles.SignUpBtn}>Sign Up</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    LoginScreenContainer: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    backgroundImage: {
        height: height,
        width: width,
        position: "absolute"
    },
    logoBackground: {
        flexDirection: "column",
        paddingTop: "20%",
        alignItems: "center",
    },
    appName: {
        fontSize: 24,
        fontWeight: '500',
    },
    welcomeName: {
        fontSize: 35,
        color: "#00A82F",
        fontWeight: "500"
    },
    input: {
        borderBottomWidth: 2,
        borderColor: "#00A82F",
        width: "90%",
        fontSize: 25,
        textAlign: "center"
    },
    FieldBackground: {

        width: "100%",
        justifyContent: "center",
        marginTop: "5%"
    },
    lable: {
        paddingLeft: "22%",
        marginTop: "12%",
        marginBottom: 10,
        color: "#bebbbb"

    },
    SingUpBg: {
        position: "absolute",
        bottom: "10%",
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