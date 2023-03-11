import React from "react";
import { Text, View } from "react-native";
import { buttonProps } from "../../types/buttonProps";

export default function ButtonAnswer({
    text,
    colorText,
    fontSizeText,
    backColorBtn,
}: buttonProps): JSX.Element {
    return (
        <View
            style={{
                backgroundColor: backColorBtn,
                paddingVertical: 20,
                paddingHorizontal: text == " " ? 24 : 25.6,
                marginVertical: 2,
                borderRadius: 10,
            }}
        >
            <Text
                style={{
                    fontSize: fontSizeText,
                    fontWeight: "bold",
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
