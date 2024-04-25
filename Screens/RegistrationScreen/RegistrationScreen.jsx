import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import logo from "../../assets/splashScreen/logo.png"
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

export default function RegistrationScreen() {
    const navigator = useNavigation();
    const [getInput, SetInput] = useState(["", "", "", ""]);
    const [firstNameValidation, setFirstNameValidation] = useState(true);
    const [LastNameValidation, setLastNameValidation] = useState(true);
    const [ageValidation, setAgeValidation] = useState(true);
    const [occupationValidation, setOccupationValidation] = useState(true);

    const handleInputChanges = (value, index) => {
        const values = getInput;
        values[index] = value;
        SetInput(values);
        if (index != 2) {

            if ((value != "") && (value != "undefined")) {
                switch (index) {
                    case 0: setFirstNameValidation(true); break;
                    case 1: setLastNameValidation(true); break;
                    case 3: setOccupationValidation(true); break;
                    default: break;
                }
            }
        }
        else {
            if ((value > 18) && (value < 100)) {
                setAgeValidation(true);
            }
            else {
                setAgeValidation(false);
            }
        }

    }

    const handleNext = () => {

        const validations = getInput.every((value, index) => {
            if (index == 2) {
                if ((value > 18) && (value < 100)) {
                    console.log(true);
                    setAgeValidation(true);
                    return true;
                }
                else {
                    console.log(false);
                    setAgeValidation(false);
                    return false;
                }
            }
            else if ((value != "") && (value != "undefined")) {
                console.log(true);

                switch (index) {
                    case 0: setFirstNameValidation(true); break;
                    case 1: setLastNameValidation(true); break;
                    case 3: setOccupationValidation(true); break;
                    default: break;
                }

                return true;
            }
            else {
                console.log(false);

                switch (index) {
                    case 0: setFirstNameValidation(false); break;
                    case 1: setFirstNameValidation(false); break;
                    case 3: setOccupationValidation(false); break;
                    default: break;
                }
                return false;
            }
        })

        if ((getInput[0].length > 0) && (getInput[0] != "undefined")) {
            setFirstNameValidation(true);
        }
        else {
            setFirstNameValidation(false);

        }

        if (validations) {
            navigator.navigate("EmailOtpVerfication");
        }
    }
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
                    <TextInput style={{ borderColor: firstNameValidation ? "#00A82F" : "red", ...styles.input }} autoCorrect={false} defaultValue={getInput[0]} onChangeText={(value) => { handleInputChanges(value, 0) }} />
                </View>
                <View>
                    <Text style={styles.lable}>Last Name</Text>
                </View>
                <View style={{ width: "70%", }}>
                    <TextInput style={[styles.input, { borderColor: LastNameValidation ? "#00A82F" : "red" }]} autoCorrect={false} defaultValue={getInput[1]} onChangeText={(value) => { handleInputChanges(value, 1) }} />
                </View>
                <View>
                    <Text style={styles.lable}>Age</Text>
                </View>
                <View style={{ width: "70%", }}>
                    <TextInput style={[styles.input, { borderColor: ageValidation ? "#00A82F" : "red" }]} keyboardType='number-pad' maxLength={2} autoCorrect={false} defaultValue={getInput[2]} onChangeText={(value) => { handleInputChanges(value, 2) }} />
                </View>
                <View>
                    <Text style={styles.lable}>Occupation</Text>
                </View>
                <View style={{ width: "70%", }}>
                    <TextInput style={[styles.input, { borderColor: occupationValidation ? "#00A82F" : "red" }]} autoCorrect={false} defaultValue={getInput[3]} onChangeText={(value) => { handleInputChanges(value, 3) }} />
                </View>
                <View style={{ marginTop: "5%", width: "84%", alignItems: "flex-end" }}>
                    <TouchableOpacity onPress={() => { handleNext() }}><Text style={styles.SignUpBtn}>Next</Text></TouchableOpacity>
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
        // borderColor: "#00A82F",
        width: "90%",
        fontSize: 25,
        marginLeft: "30%",
        color: "#000000",
        paddingLeft: 5
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