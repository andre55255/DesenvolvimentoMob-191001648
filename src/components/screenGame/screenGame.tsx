import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { pressKeyboardBll } from "../../bll/keyboardActions";
import { configGame } from "../../helpers/constants";
import { initialValueGameButtonAnswer } from "../../helpers/initialValueGameButtonAnswer";
import { initialValueGameButtonKeyboard } from "../../helpers/initialValueGameButtonKeyboard";
import { CurrentWord } from "../../types/currentWord";
import { GameButtonAnswers } from "../../types/gameButtonAnswer";
import Header from "../header/header";
import ScreenButtons from "../screenButtons/screenButtons";
import ScreenKeyboard from "../screenKeyboard/screenKeyboard";

export default function ScreenGame(): JSX.Element {
    const [currentWord, setCurrentWord] = useState<CurrentWord>({
        numberWord: 1,
        word: [],
    });

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
            pressKeyboardBll(
                key,
                currentWord,
                setCurrentWord,
                dataGameAnswer,
                setDataGameAnswer
            );
        } catch (err) {
            const error = err as Error;
            Alert.alert("Erro", error.message);
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
