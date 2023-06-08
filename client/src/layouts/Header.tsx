import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
type Props = {
    navigation: any;
};

const Header = function ({ navigation }: Props) {
    const handleGoBack = function () {
        navigation.goBack();
    };
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={function () {
                        return handleGoBack();
                    }}
                    style={styles.iconContainer}
                >
                    <AntDesign
                        name={"arrowleft"}
                        style={styles.icon}
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Start a Meeting</Text>
            </View>
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#223243",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 10,
        // height: 100,
        // borderBottomColor: "#1f1f1f",
        // borderBottomWidth: 1,
    },
    text: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
    },
    iconContainer: {
        padding: 10,
        position: "absolute",
        left: 10,
    },
    icon: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
