import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { asyncStorageKeys } from "../../helpers/constants";
import { initailizeAsyncStorage } from "../../helpers/initializeAsyncStorage";

interface AuxProps {
    children: JSX.Element | JSX.Element[];
}

export default function ContainerMain({ children }: AuxProps): JSX.Element {
    return (
        <SafeAreaView style={styles.container} onLayout={async () => {
            if (!asyncStorageKeys.isLoadStorage) {
                await initailizeAsyncStorage();
                asyncStorageKeys.isLoadStorage = true;
            }
        }}>
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
        padding: 10,
        height: "100%"
    }
});