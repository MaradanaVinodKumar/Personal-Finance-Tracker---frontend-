import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from "../Screens/SplashScreen/SplashScreen"
import LoginScreen from "../Screens/LoginScreen/LoginScreen"
import RegistrationScreen from "../Screens/RegistrationScreen/RegistrationScreen"

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
    )
}