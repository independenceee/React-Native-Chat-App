import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";


type Props = {
    id: any;
    chatName: any;
    enterChat: any;
};

const CustomListItem = function ({ id, chatName, enterChat }: Props) {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://avatars.githubusercontent.com/u/108068667?s=400&u=5e650526110969fc0a35f3839d8f3acf37228dbd&v=4",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Youtube Chat
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    this is a text subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem;

const styles = StyleSheet.create({
    container: {},
});
