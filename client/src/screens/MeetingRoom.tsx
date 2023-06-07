import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { io } from "socket.io-client";
import Header from "../apps/MeetingRoom/Header";
import OptionMeeting from "../apps/MeetingRoom/OptionMeeting";

type Props = {
    navigation: any;
};

let socket: any;

const MeetingRoom = function ({ navigation }: Props) {
    const [name, setName] = useState<string>("");
    const [roomId, setRoomId] = useState<string>("");

    const joinRoom = function () {
        socket.emit("join-room", {
            roomId: roomId,
            name: name,
        });
    };

    useEffect(() => {
        socket = io("http://localhost:3000", {
            reconnection: true,
        });
        socket.on("connection", () => {
            return console.log("connected");
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <OptionMeeting
                name={name}
                roomId={roomId}
                setName={setName}
                setRoomId={setRoomId}
                joinRoom={joinRoom}
            />
        </SafeAreaView>
    );
};

export default MeetingRoom;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#223243",
        flex: 1,
    },
});
