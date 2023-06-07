import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

type Props = {};

const contactsMenuButtons = [
    {
        type: "starred",
        name: "Starred",
        image: "star",
    },
    {
        type: "Khanhs",
        name: "Nguyen Khanh",
        image: require("../../../assets/favicon.png"),
    },
];

const ContactMenu = function ({}: Props) {
    return (
        <View style={styles.container}>
            {contactsMenuButtons.map(function (contact, index) {
                return (
                    <View key={index} style={styles.wrapper}>
                        {contact.type === "starred" ? (
                            <View style={styles.starredIcon}>
                                <AntDesign
                                    name={contact.image}
                                    size={30}
                                    color={"#fefefe"}
                                />
                            </View>
                        ) : (
                            <Image
                                source={contact.image}
                                style={styles.image}
                            />
                        )}
                        <Text style={styles.text}>{contact.name}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export default ContactMenu;

const styles = StyleSheet.create({
    container: {},
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    starredIcon: {
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    text: {
        color: "white",
        paddingLeft: 15,
        fontSize: 18,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
    },
});
