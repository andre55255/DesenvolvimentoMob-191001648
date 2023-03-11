import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { constantsFontText } from "../../helpers/constants";
import { GameButtonAnswers } from "../../types/gameButtonAnswer";
import ButtonKeyboard from "../buttonKeyboard/buttonKeyboard";

interface AuxProps {
    dataButtonAnswer: GameButtonAnswers[]
}

export default function ScreenKeyboard({ dataButtonAnswer }: AuxProps): JSX.Element {
    return (
        <View style={styles.container}>
            <FlatList 
                data={dataButtonAnswer}
                keyExtractor={item => item.id}
                numColumns={10}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.items}>
                            <ButtonKeyboard 
                                backColorBtn={item.backColor}
                                colorText={item.colorText}
                                fontSizeText={constantsFontText.sizeButtonKeyboard}
                                text={item.text}
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
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: "100%"
    },
    items: {
        alignItems: "center",
        flexGrow: 1,
        flexBasis: 0,
    }
});
