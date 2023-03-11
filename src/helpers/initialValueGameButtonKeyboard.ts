import { GameButtonAnswers } from "../types/gameButtonAnswer";
import { constantsColorsBackColor, constantsColorsText } from "./constants";

export const initialValueGameButtonKeyboard = () => {
    try {
        const data: GameButtonAnswers[] = [];
        data.push({
            id: "Q",
            text: "Q",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "W",
            text: "W",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "E",
            text: "E",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "R",
            text: "R",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "T",
            text: "T",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "Y",
            text: "Y",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "U",
            text: "U",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "I",
            text: "I",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "O",
            text: "O",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "P",
            text: "P",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "A",
            text: "A",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "S",
            text: "S",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "D",
            text: "D",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "F",
            text: "F",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "G",
            text: "G",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "H",
            text: "H",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "J",
            text: "J",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "K",
            text: "K",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "L",
            text: "L",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: ">",
            text: ">",
            backColor: constantsColorsBackColor.btnEnter,
            colorText: constantsColorsText.btnEnter,
        });
        data.push({
            id: "Z",
            text: "Z",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "X",
            text: "X",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "C",
            text: "C",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "V",
            text: "V",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "B",
            text: "B",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "N",
            text: "N",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        data.push({
            id: "M",
            text: "M",
            backColor: constantsColorsBackColor.notSet,
            colorText: constantsColorsText.notSet,
        });
        return data;
    } catch (ex) {
        throw new Error("Falha inesperada ao montar objeto de teclado do jogo");
    }
};
