import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import CustomListItem from "../apps/ChatRoom/CustomListItem";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

type Props = {
    navigation: any;
};

const ChatRoom = function ({ navigation }: Props) {
    const handleSignOutUser = function () {
        signOut(auth)
            .then(function () {
                navigation.replace("Login");
            })
            .catch(function (error) {
                return console.log(error);
            });
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChatRoom;

const styles = StyleSheet.create({
    container: {},
});
