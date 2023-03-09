import React from "react";
import { Text, View } from "react-native";

interface AuxProps {
    text: string;
    colorText: string;
    fontSizeText: number;
    backColorBtn: string;
}

export default function ButtonDefault({
    text,
    colorText,
    fontSizeText,
    backColorBtn,
}: AuxProps): JSX.Element {
    return (
        <View
            style={{
                backgroundColor: backColorBtn,
                paddingVertical: 20,
                paddingHorizontal: 30,
                marginVertical: 5,
                marginHorizontal: 5,
                borderRadius: 10,
            }}
        >
            <Text
                style={{
                    fontSize: fontSizeText,
                    color: colorText,
                    textAlign: "center",
                    marginHorizontal: text == " " ? 5 : 0
                }}
            >
                {text}
            </Text>
        </View>
    );
}
