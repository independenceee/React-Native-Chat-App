import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Pressable,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Entyno from "react-native-vector-icons/Entypo";
import ChatMessage from "./ChatMessage";
import { Platform } from "react-native";

type Props = {
    modalVisibale: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Chat = function ({ setModalVisible, modalVisibale }: Props) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.headerContainer}>
                                <Pressable
                                    onPress={function () {
                                        return setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.buttonText}>Close</Text>
                                </Pressable>
                                <Text style={styles.heading}>Chat</Text>
                                <Entyno
                                    name="bell"
                                    size={25}
                                    color={"#efefef"}
                                />
                            </View>
                            <ChatMessage />
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#223243",
    },
    wrapper: {
        height: "100%",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
    },

    buttonText: {
        color: "white",
        fontSize: 20,
    },
    heading: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});
