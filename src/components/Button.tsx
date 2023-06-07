import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

type Props = {
    stylesContainer: any;
    stylesContent: any;
    content: string;
    handleEvent: () => void;
};

const Button = function ({
    stylesContainer,
    stylesContent,
    content,
    handleEvent,
}: Props) {
    return (
        <TouchableOpacity onPress={handleEvent} style={stylesContainer}>
            <Text style={stylesContent}>{content}</Text>
        </TouchableOpacity>
    );
};

export default Button;
