import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../apps/home/Header";
import SearchBar from "../apps/home/SearchBar";
import MenuButton from "../apps/home/MenuButton";
import ContactMenu from "../apps/home/ContactMenu";

type Props = {};

const Home = function ({}: Props) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <Header />
                <SearchBar />
                <MenuButton />
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
