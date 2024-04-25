import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native'
import logo from "../../assets/splashScreen/logo.png"
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function EmailOtpVerfication() {

    const [getInputs, setInputs] = useState(['', '', '', '']);
    const [getEmail, setEmail] = useState("");
    const [getEmailValid, setEmailVAlid] = useState(true);
    const [getEmailValidFinal, setEmailValidFinal] = useState(false);

    const input = useRef([]);
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

    const validateEmail = () => {
        if (getEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setEmailVAlid(true);
            setEmailValidFinal(true);
        }
        else {
            setEmailVAlid(false);
            setEmailValidFinal(false);
        }
    }

    return (
        <View style={styles.EmailOtpVerficationContainer}>
            <View style={styles.logoBackground}>
                <Image source={logo} style={styles.logos} />
                <Text style={styles.appName}>Sign Up</Text>
                <Text style={styles.appName}>E-mail OTP <Text style={{ color: "#00A82F" }}>Verification</Text></Text>
            </View>

            <View style={styles.FieldBackground}>
                <View>
                    <Text style={styles.lable}>Enter E-mail</Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginLeft: "4%" }}>
                    <View style={{ marginRight: 10 }}>
                        <Icon name='user' size={30} color={"#00A82F"} />
                    </View>
                    <View style={{ width: "70%", }}>
                        <TextInput style={{ borderColor: (getEmailValid ? " rgba(0, 168, 47, 1)" : "red"), ...styles.input }} onChangeText={(email) => { setEmail(email); }} onChange={() => { validateEmail() }} keyboardType='' />
                    </View>
                </View>

                <View style={{ height: 50, justifyContent: "center", display: getEmailValidFinal ? "flex" : "none" }}>
                    <TouchableOpacity><Text style={styles.send}>Send</Text></TouchableOpacity>
                    <ActivityIndicator style={styles.send} color={"#00A82F"} size={25} />
                    <TouchableOpacity><Text style={styles.send}>Resend</Text></TouchableOpacity>
                </View>
                <View style={{ display: "none" }}>
                    <View>
                        <Text style={styles.lable}>Enter 4 digit pin</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginLeft: "1%", }}>
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
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    EmailOtpVerficationContainer: {
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
    }, input: {
        borderBottomWidth: 2,
        // borderColor: "#00A82F",
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
        marginBottom: 10,
        color: "#bebbbb"

    },
    send: {
        fontSize: 20,
        color: "#00A82F",
        fontWeight: "500",
        textAlign: "center",
        alignItems: "center"
    }
})