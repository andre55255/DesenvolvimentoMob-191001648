import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

interface AuxProps {
    children: JSX.Element | JSX.Element[];
}

export default function ContainerMain({ children }: AuxProps): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        direction: "rtl",
        alignItems: "center",
        paddingTop: 20,
        height: "100%"
    }
});