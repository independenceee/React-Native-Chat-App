import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Input, Image } from "react-native-elements";

type Props = {
    navigation: any;
};

const Login = function ({ navigation }: Props) {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSignIn = function () {};

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/Logo.jpg")}
            />
            <View style={{ height: 0 }} />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    autoFocus
                    value={email}
                    onChangeText={function (email: string) {
                        return setEmail(email);
                    }}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={function (password: string) {
                        return setPassword(password);
                    }}
                />
            </View>
            <Button
                onPress={handleSignIn}
                containerStyle={styles.button}
                title={"Login"}
            />
            <Button
                onPress={function () {
                    return navigation.navigate("Register");
                }}
                containerStyle={styles.button}
                title={"Register"}
                type={"outline"}
            />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
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
    inputContainer: {
        width: 300,
        marginTop: 20,
    },
    button: {
        marginTop: 10,
        width: 250,
        borderRadius: 5,
    },
});
