import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { initialValueGameButtonAnswer } from "../../helpers/initialValueGameButtonAnswer";
import { initialValueGameButtonKeyboard } from "../../helpers/initialValueGameButtonKeyboard";
import { GameButtonAnswers } from "../../types/gameButtonAnswer";
import Header from "../header/header";
import ScreenButtons from "../screenButtons/screenButtons";
import ScreenKeyboard from "../screenKeyboard/screenKeyboard";

export default function ScreenGame(): JSX.Element {
    const [dataGameAnswer, setDataGameAnswer] = useState<GameButtonAnswers[]>(
        []
    );
    const [dataGameKeyboard, setDataGameKeyboard] = useState<
        GameButtonAnswers[]
    >([]);
    useEffect(() => {
        try {
            setDataGameAnswer(initialValueGameButtonAnswer());
            setDataGameKeyboard(initialValueGameButtonKeyboard());
        } catch (err) {
            const error = err as Error;
            Alert.alert("Erro", error.message);
        }
    }, [setDataGameAnswer, setDataGameKeyboard]);

    const pressKeyboard = (key: GameButtonAnswers) => {
        try {
            const dataGame = [...dataGameAnswer];
            let index: number = -2;
            const elementIndex = dataGame.forEach((val, ind) => {
                if (val.text != " ") {
                    index = ind;
                }
            });
            if (index == -2) {
                index = 0;
            }
            dataGame[index].text = key.text;
            setDataGameAnswer(dataGame);
        } catch (err) {
            const error = err as Error;
            Alert.alert("Erro", "Falha ao capturar tecla: " + error.message);
        }
    };

    return (
        <>
            <Header title="PALAVRA.IO" />
            <ScreenButtons dataButtonAnswer={dataGameAnswer} />
            <ScreenKeyboard
                dataButtonAnswer={dataGameKeyboard}
                onPressEvt={pressKeyboard}
            />
        </>
    );
}
