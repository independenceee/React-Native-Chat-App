import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Input, Button, Image } from "react-native-elements";
type Props = {
    navigation: any;
};

const Register = function ({ navigation }: Props) {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");

    const handleRegister = function () {};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Create an Account</Text>
                <Image
                    style={styles.image}
                    source={require("../../assets/Logo.jpg")}
                />
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Full Name"
                        autoFocus
                        style={styles.textInput}
                        value={fullName}
                        onChangeText={function (text) {
                            return setFullName(text);
                        }}
                    />
                    <Input
                        placeholder="Email"
                        style={styles.textInput}
                        value={email}
                        onChangeText={function (text) {
                            return setEmail(text);
                        }}
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        style={styles.textInput}
                        value={password}
                        onChangeText={function (text) {
                            return setPassword(text);
                        }}
                    />
                    <Input
                        placeholder="Profile Picture URL (Optional)"
                        style={styles.textInput}
                        value={imageUrl}
                        onChangeText={function (text) {
                            return setImageUrl(text);
                        }}
                    />
                </View>
                <Button title={"Register"} containerStyle={styles.button} />
            </View>
        </SafeAreaView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#223243",
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#223243",
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        borderRadius: 20,
        shadowColor: "white",
        shadowRadius: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 50,
        fontWeight: "bold",
        color: "white",
    },
    inputContainer: {
        width: 300,
        marginTop: 20,
    },
    textInput: {},
    button: {
        marginTop: 10,
        width: 250,
        borderRadius: 5,
    },
});
