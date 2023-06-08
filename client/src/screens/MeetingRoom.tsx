import React, { useState, useEffect } from "react";
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
} from "react-native";
import { io } from "socket.io-client";
import Header from "../apps/MeetingRoom/Header";
import Chat from "../apps/MeetingRoom/Chat";
import OptionMeeting from "../apps/MeetingRoom/OptionMeeting";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type Props = {
    navigation: any;
};

const menuIcons = [
    {
        id: 1,
        name: "microphone",
        title: "Mute",
        customColor: "#fefefe",
    },
    {
        id: 2,
        name: "video-camera",
        title: "Stop Video",
        customColor: "#fefefe",
    },
    {
        id: 3,
        name: "upload",
        title: "Share Content",
        customColor: "#fefefe",
    },
    {
        id: 4,
        name: "group",
        title: "Participants",
        customColor: "#fefefe",
    },
];

let socket: any;

const MeetingRoom = function ({ navigation }: Props) {
    const [name, setName] = useState<string>("");
    const [roomId, setRoomId] = useState<string>("");
    const [activeUsers, setActiveUsers] = useState<any>([]);
    const [startCamera, setStartCamera] = useState<boolean>(false);
    const [modalVisibale, setModalVisible] = useState<boolean>(false);

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
        socket = io("https://f90f-14-163-193-228.ap.ngrok.io", {
            reconnection: true,
        });
        socket.on("connection", () => {
            return console.log("connected");
        });

        socket.on("all-users", function (users: any) {
            setActiveUsers(users);
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            {startCamera ? (
                <SafeAreaView style={styles.wrapper}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        presentationStyle="fullScreen"
                        visible={modalVisibale}
                        onRequestClose={function () {
                            setModalVisible(!modalVisibale);
                        }}
                    >
                        <Chat
                            modalVisibale={modalVisibale}
                            setModalVisible={setModalVisible}
                        />
                    </Modal>

                    <View style={styles.activeUsersContainer}>
                        <View style={styles.cameraContainer}>
                            <Camera
                                type="front"
                                style={{
                                    width:
                                        activeUsers.length <= 1 ? "100%" : 200,
                                    height: activeUsers.length <= 1 ? 600 : 200,
                                }}
                            ></Camera>
                            {activeUsers
                                ?.filter((user: any) => user.userName != name)
                                ?.map(function (user: any, index: number) {
                                    return (
                                        <View
                                            key={index}
                                            style={styles.activeUserContainer}
                                        >
                                            <Text style={{ color: "white" }}>
                                                {user.userName}
                                            </Text>
                                        </View>
                                    );
                                })}
                        </View>
                    </View>

                    <View style={styles.menu}>
                        {menuIcons.map(function (icon, index) {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.title}
                                >
                                    <FontAwesome
                                        name={icon.name}
                                        size={24}
                                        color={"#efefef"}
                                    />
                                    <Text style={styles.textTitle}>
                                        {icon.title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                        <TouchableOpacity
                            onPress={function () {
                                return setModalVisible(true);
                            }}
                            style={styles.title}
                        >
                            <FontAwesome
                                name="comment"
                                size={24}
                                color={"#efefef"}
                            />
                            <Text style={styles.textTitle}>Chat</Text>
                        </TouchableOpacity>
                    </View>
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
    wrapper: {
        flex: 1,
    },

    camera: {
        height: "100%",
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 15,
    },
    textTitle: {
        color: "white",
        marginTop: 10,
    },

    activeUsersContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black",
        width: "100%",
        alignItems: "center",
    },

    cameraContainer: {
        backgroundColor: "black",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    activeUserContainer: {
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
        height: 200,
        backgroundColor: "#223243",
        justifyContent: "center",
        alignItems: "center",
    },
});
