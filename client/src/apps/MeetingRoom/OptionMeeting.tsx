import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";

type Props = {
    name: string;
    roomId: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setRoomId: React.Dispatch<React.SetStateAction<string>>;
    joinRoom: () => void;
};

const OptionMeeting = function ({
    name,
    setName,
    roomId,
    setRoomId,
    joinRoom,
}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.infomation}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter name ..."
                    value={name}
                    placeholderTextColor={"#767476"}
                    onChangeText={(text: string) => setName(text)}
                />
            </View>
            <View style={styles.infomation}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter room id ..."
                    value={roomId}
                    placeholderTextColor={"#767476"}
                    onChangeText={(text: string) => setRoomId(text)}
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <Button
                    stylesContainer={styles.startMeetingButton}
                    stylesContent={{ color: "white", fontWeight: "bold" }}
                    content="Start Meeting"
                    handleEvent={joinRoom}
                />
            </View>
        </View>
    );
};

export default OptionMeeting;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#223243",
        flex: 1,
        alignItems: "center",
    },
    infomation: {
        width: "90%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#223243",
        padding: 12,
        borderRadius: 10,
    },
    textInput: {
        color: "white",
        fontSize: 18,
    },

    startMeetingButton: {
        width: 350,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 15,
        backgroundColor: "#00dfc4",
    },
});
