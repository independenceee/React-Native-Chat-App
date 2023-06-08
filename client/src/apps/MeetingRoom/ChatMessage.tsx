import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
type Props = {};

const ChatMessage = function ({}: Props) {
    const [messageText, setMessageText] = useState<string>("");
    return (
        <View style={styles.container}>
            <View style={styles.chatMessages}></View>
            <View style={styles.chatFormContainer}>
                <Text style={{ color: "white" }}>Send to: Everyone</Text>
                <View style={styles.chatForm}>
                    <TextInput
                        value={messageText}
                        onChangeText={function (text: string) {
                            return setMessageText(text);
                        }}
                        placeholderTextColor={"#595859"}
                        style={styles.textInput}
                        placeholder="Tap here to chat"
                    />
                    <TouchableOpacity
                        style={{
                            ...styles.button,
                            backgroundColor: messageText
                                ? "#00dfc4"
                                : "#595859",
                        }}
                    >
                        <FontAwesome name="send" size={18} color={"#fefefe"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ChatMessage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatMessages: {
        flex: 1,
    },

    chatFormContainer: {
        borderColor: "2f2f2f",
        borderTopWidth: 1,
        padding: 12,
    },
    chatForm: {
        flexDirection: "row",
    },
    textInput: {
        height: 40,
        color: "#efefef",
        borderColor: "#00dfc4",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        flex: 1,
    },
    button: {
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 12,
        backgroundColor: "#00dfc4",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});
