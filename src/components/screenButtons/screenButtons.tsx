import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ButtonDefault from "../buttonDefault/buttonDefault";

const data = [
    { id: "1", name: "A" },
    { id: "2", name: "B" },
    { id: "3", name: " " },
    { id: "4", name: " " },
    { id: "5", name: " " },
    { id: "6", name: " " },
    { id: "7", name: " " },
    { id: "8", name: " " },
    { id: "9", name: " " },
    { id: "10", name: " " },
    { id: "11", name: " " },
    { id: "12", name: " " },
    { id: "13", name: " " },
    { id: "14", name: " " },
    { id: "15", name: " " },
    { id: "16", name: " " },
]

export default function ScreenButtons(): JSX.Element {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={4}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.items}>
                            <ButtonDefault 
                                backColorBtn="#A7A7A7"
                                fontSizeText={20}
                                colorText="#fff"
                                text={item.name}
                            />
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%"
    },
    items: {
        alignItems: "center",
        flexGrow: 1,
        flexBasis: 0,
    }
});