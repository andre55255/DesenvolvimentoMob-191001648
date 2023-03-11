import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface AuxProps {
    title: string;
}

export default function Header({ title }: AuxProps): JSX.Element {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
});
