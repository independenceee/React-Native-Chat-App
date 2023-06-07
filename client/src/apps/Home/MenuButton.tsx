import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
    {
        id: 1,
        name: "video-camera",
        title: "New Meeting",
        customColor: "#0470DC",
    },
    {
        id: 2,
        name: "plus-square",
        title: "Join",
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule",
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen",
    },
];

type Props = {
    navigation: any;
};

const MenuButton = function ({ navigation }: Props) {
    const openMeetingRoom = function () {
        navigation.navigate("MeetingRoom");
    };
    return (
        <View style={styles.container}>
            {items.map(function (item, index) {
                return (
                    <View key={index} style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={function () {
                                return openMeetingRoom();
                            }}
                            style={{
                                ...styles.button,
                                backgroundColor: item.customColor
                                    ? item.customColor
                                    : "#00dfc4",
                            }}
                        >
                            <FontAwesome
                                name={item.name}
                                size={23}
                                color={"#efefef"}
                            />
                        </TouchableOpacity>
                        <Text style={styles.menuText}>{item.title}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export default MenuButton;

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: "#1f1f1f",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonContainer: {
        alignItems: "center",
        flex: 1,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        shadowRadius: 10,
    },
    menuText: {
        color: "#858585",
        paddingTop: 10,
        fontSize: 12,
        fontWeight: "600",
    },
});
