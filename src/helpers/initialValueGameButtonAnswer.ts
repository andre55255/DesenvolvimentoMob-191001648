import { GameButtonAnswers } from "../types/gameButtonAnswer";
import { configGame, constantsColorsBackColor, constantsColorsText } from "./constants";

export const initialValueGameButtonAnswer = () => {
    try {
        const data: GameButtonAnswers[] = [];
        const numberIndex = configGame.numberLetterWord * configGame.numberWords;

        for (let i = 1; i <= numberIndex; i++) {
            data.push({
                id: i.toString(),
                text: " ",
                backColor: constantsColorsBackColor.notSet,
                colorText: constantsColorsText.notSet,
            });
        }
        return data;
    } catch (ex) {
        throw new Error(
            "Falha inesperada ao montar objeto de inicialização do jogo"
        );
    }
};
