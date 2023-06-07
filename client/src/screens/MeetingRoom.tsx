import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../apps/MeetingRoom/Header";
import OptionMeeting from "../apps/MeetingRoom/OptionMeeting";

type Props = {
    navigation: any;
};

const MeetingRoom = function ({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <OptionMeeting />
        </SafeAreaView>
    );
};

export default MeetingRoom;

const styles = StyleSheet.create({
    container: { backgroundColor: "#223243", flex: 1 },
});
