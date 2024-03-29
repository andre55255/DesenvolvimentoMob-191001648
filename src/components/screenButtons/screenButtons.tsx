import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { constantsFontText } from "../../helpers/constants";
import { GameButtonAnswers } from "../../types/gameButtonAnswer";
import ButtonAnswer from "../buttonAnswer/buttonAnswer";

interface AuxProps {
    dataButtonAnswer: GameButtonAnswers[]
}

export default function ScreenButtons({ dataButtonAnswer }: AuxProps): JSX.Element {
    return (
        <View style={styles.container}>
            <FlatList
                data={dataButtonAnswer}
                numColumns={5}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.items}>
                            <ButtonAnswer 
                                backColorBtn={item.backColor}
                                fontSizeText={constantsFontText.sizeButtonAnswer}
                                colorText={item.colorText}
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
        paddingHorizontal: 20,
        width: "100%"
    },
    items: {
        alignItems: "center",
        flexGrow: 1,
        flexBasis: 0,
    }
});