import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../apps/Home/Header";
import SearchBar from "../apps/Home/SearchBar";
import MenuButton from "../apps/Home/MenuButton";
import ContactMenu from "../apps/Home/ContactMenu";

type Props = {
    navigation: any;
};

const Home = function ({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <Header />
                <SearchBar />
                <MenuButton navigation={navigation} />
                <ContactMenu />
            </SafeAreaView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#223243",
        padding: 15,
    },
    wrapper: {
        height: "100%",
    },
});
