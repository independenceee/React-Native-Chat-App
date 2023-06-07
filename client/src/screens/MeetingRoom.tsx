import React, { useState, useEffect } from "react";
import { Alert, SafeAreaView, StyleSheet, Text } from "react-native";
import { io } from "socket.io-client";
import Header from "../apps/MeetingRoom/Header";
import OptionMeeting from "../apps/MeetingRoom/OptionMeeting";
import { Camera } from "expo-camera";

type Props = {
    navigation: any;
};

let socket: any;

const MeetingRoom = function ({ navigation }: Props) {
    const [name, setName] = useState<string>("");
    const [roomId, setRoomId] = useState<string>("");
    const [activeUser, setActiveUser] = useState();
    const [startCamera, setStartCamera] = useState<boolean>(false);

    const __startCamera = async function () {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === "granted") {
            setStartCamera(true);
        } else {
            Alert.alert("Access denied");
        }
    };

    const joinRoom = function () {
        __startCamera();
        socket.emit("join-room", {
            roomId: roomId,
            userName: name,
        });
    };

    useEffect(() => {
        socket = io("https://b5a7-14-163-193-228.ap.ngrok.io", {
            reconnection: true,
        });
        socket.on("connection", () => {
            return console.log("connected");
        });

        // socket.on("all-users", function (users: any) {
        //     console.log("avtive user");
        //     console.log(users);
        //     setActiveUser(users);
        // });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            {startCamera ? (
                <SafeAreaView>
                    <Camera
                        type="front"
                        style={{ width: "100%", height: 600 }}
                    ></Camera>
                </SafeAreaView>
            ) : (
                <OptionMeeting
                    name={name}
                    roomId={roomId}
                    setName={setName}
                    setRoomId={setRoomId}
                    joinRoom={joinRoom}
                />
            )}
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
