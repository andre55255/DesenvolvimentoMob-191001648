import { Alert, Text, TouchableOpacity, View } from "react-native";
import { buttonProps } from "../../types/buttonProps";

export default function ButtonKeyboard({
    text,
    backColorBtn,
    colorText,
    fontSizeText,
    onPressEvt,
    gameData,
}: buttonProps) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: backColorBtn,
                paddingVertical: 8,
                paddingHorizontal: text == " " ? 9 : 8.6,
                borderColor: "#fff",
                margin: 2,
            }}
            onPress={() =>
                onPressEvt
                    ? onPressEvt(gameData)
                    : Alert.alert("Erro", "Função não encontrada")
            }
        >
            <Text
                style={{
                    color: colorText,
                    fontSize: fontSizeText,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginHorizontal: text == " " ? 4 : 0,
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}
