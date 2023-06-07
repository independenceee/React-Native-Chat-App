import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MeetingRoom from "../screens/MeetingRoom";

type Props = {};

const Navigation = function ({}: Props) {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                   
                />
                <Stack.Screen name="MeetingRoom" component={MeetingRoom} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
