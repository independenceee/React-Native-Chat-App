import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import ChatRoom from "../screens/ChatRoom";
import MeetingRoom from "../screens/MeetingRoom";
import Login from "../screens/Login";
import Register from "../screens/Register";

type Props = {};

const Navigation = function ({}: Props) {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ChatRoom"
                    component={ChatRoom}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Register"
                    component={Register}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="MeetingRoom"
                    component={MeetingRoom}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
