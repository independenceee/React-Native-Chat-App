import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Enttypo from "react-native-vector-icons/Entypo";

type Props = {};

const Header = function ({}: Props) {
    return (
        <View style={styles.container}>
            <Enttypo name="notification" size={30} color={"#ffffff"} />
            <Text style={styles.heading}>Meet & Chat</Text>
            <Enttypo name="new-message" size={30} color={"#ffffff"} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    heading: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "700",
    },
});
