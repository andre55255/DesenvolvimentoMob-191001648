import { Alert } from "react-native";
import {
    asyncStorageKeys,
    configGame,
    constantsColorsBackColor,
    constantsColorsText,
    constantsGame,
    statusWord,
} from "../helpers/constants";
import { CurrentWord } from "../types/currentWord";
import { GameButtonAnswers } from "../types/gameButtonAnswer";
import { WordExist } from "../types/wordExist";
import wordApiService from "../services/words/wordApiService";
import { storageSetItem } from "../services/asyncStorage/asyncStorageService";

export const pressKeyboardBll = async (
    key: GameButtonAnswers,
    currentWord: CurrentWord,
    setCurrentWord: React.Dispatch<React.SetStateAction<CurrentWord>>,
    dataGameAnswer: GameButtonAnswers[],
    setDataGameAnswer: React.Dispatch<
        React.SetStateAction<GameButtonAnswers[]>
    >,
    dataGameKeyboard: GameButtonAnswers[],
    setDataGameKeyBoard: React.Dispatch<
        React.SetStateAction<GameButtonAnswers[]>
    >
): Promise<boolean> => {
    try {
        if (constantsGame.isCorrectWordToday) {
            Alert.alert("Parábéns", "Você já acertou a palavra de hoje");
            return true;
        }
        if (constantsGame.isChancesFinished) {
            Alert.alert(
                "Opss!",
                "Suas chances acabaram, que pena! A palavra do dia era: " +
                    constantsGame.wordToday
            );
            return true;
        }

        // Caso aperte no Ok e já esteja completa as letas
        if (
            currentWord.word.length >= configGame.numberLetterWord &&
            key.id == configGame.idBtnOk
        ) {
            await handleOkClickWordCompleted(
                key,
                currentWord,
                setCurrentWord,
                dataGameAnswer,
                setDataGameAnswer,
                dataGameKeyboard,
                setDataGameKeyBoard
            );
            return true;
        }

        // Caso aperte no Ok antes de completar as letras
        validOkClickLetterUndefined(key, currentWord);

        // Caso aperte no botão de backspace e não tenha nenhuma letra ainda
        validBackspaceClickLettersEmpty(key, currentWord);

        // Caso aperte em alguma letra e o número de letras dessa palavra estiver excedido e
        // também botão seja diferente de backspace
        validLetterClickNumberAttemptsExceeded(key, currentWord);

        // Buscando a primeira lacuna disponível na palavra atual
        const dataGame = [...dataGameAnswer];
        const elementIndex = dataGame.find((x) => x.text == " ")?.id;
        const index = parseInt(elementIndex!!) - 1;

        if (key.id == configGame.idBtnBack) {
            // Caso tenha sido pressionado o botão de backspace, retirar letra das listas e colocar espaço em branco no lugar
            dataGame[index - 1].text = " ";
            if (currentWord.word.length > 0) {
                const wordUp = [...currentWord.word];
                wordUp.pop();
                setCurrentWord({
                    ...currentWord,
                    word: wordUp,
                });
            }
        } else {
            // Caso seja uma letra digitada, preencher atualizar estados do game
            dataGame[index].text = key.text;
            const wordUp = [...currentWord.word];
            wordUp.push({
                value: key.text,
                dataGamePosition: key.id,
                index: index + 1,
            });
            setCurrentWord({
                ...currentWord,
                word: wordUp,
            });
        }
        setDataGameAnswer(dataGame);

        return true;
    } catch (err) {
        const error = err as Error;
        throw err;
    }
};

const handleOkClickWordCompleted = async (
    key: GameButtonAnswers,
    currentWord: CurrentWord,
    setCurrentWord: React.Dispatch<React.SetStateAction<CurrentWord>>,
    dataGameAnswer: GameButtonAnswers[],
    setDataGameAnswer: React.Dispatch<
        React.SetStateAction<GameButtonAnswers[]>
    >,
    dataGameKeyboard: GameButtonAnswers[],
    setDataGameKeyBoard: React.Dispatch<
        React.SetStateAction<GameButtonAnswers[]>
    >
): Promise<void> => {
    const resultVerify: WordExist = await verifyWordExist(currentWord);

    verifyCurrentWordLetters(
        resultVerify,
        dataGameAnswer,
        setDataGameAnswer,
        dataGameKeyboard,
        setDataGameKeyBoard
    );

    const resultHitCorrectWord = verifyHitCorrectWord(resultVerify);
    if (resultHitCorrectWord) {
        storageSetItem(asyncStorageKeys.isCorrectWordToday, "true");
        constantsGame.isCorrectWordToday = true;
        return;
    }

    incrementCurrentWord(currentWord, setCurrentWord);
    if (currentWord.numberWord == configGame.numberWords) {
        Alert.alert(
            "Opss",
            "Você falhou, a palavra do dia era: " + constantsGame.wordToday
        );
        storageSetItem(asyncStorageKeys.isChancesToday, "true");
        constantsGame.isChancesFinished = true;
    }
};

const verifyCurrentWordLetters = (
    resultVerifyWord: WordExist,
    dataGameAnswer: GameButtonAnswers[],
    setDataGameAnswer: React.Dispatch<
        React.SetStateAction<GameButtonAnswers[]>
    >,
    dataGameKeyboard: GameButtonAnswers[],
    setDataGameKeyBoard: React.Dispatch<
        React.SetStateAction<GameButtonAnswers[]>
    >
): void => {
    const dataGame = [...dataGameAnswer];
    const keyboardGame = [...dataGameKeyboard];

    resultVerifyWord.models.forEach((item) => {
        const indexDataGame = dataGame.findIndex(
            (x) => x.id == item.dataGamePosition
        );
        const indexDataKeyboard = keyboardGame.findIndex(
            (x) => x.text == item.value
        );
        if (item.status == statusWord.notExist) {
            dataGame[indexDataGame].backColor =
                constantsColorsBackColor.notExist;
            dataGame[indexDataGame].colorText = constantsColorsText.notExist;

            keyboardGame[indexDataKeyboard].backColor =
                constantsColorsBackColor.notExist;
            keyboardGame[indexDataKeyboard].colorText =
                constantsColorsText.notExist;
        } else if (item.status == statusWord.letterCorrect) {
            dataGame[indexDataGame].backColor =
                constantsColorsBackColor.letterCorrect;
            dataGame[indexDataGame].colorText =
                constantsColorsText.letterCorrect;

            keyboardGame[indexDataKeyboard].backColor =
                constantsColorsBackColor.letterCorrect;
            keyboardGame[indexDataKeyboard].colorText =
                constantsColorsText.letterCorrect;
        } else if (item.status == statusWord.letterPositionIncorrect) {
            dataGame[indexDataGame].backColor =
                constantsColorsBackColor.letterPositionIncorrect;
            dataGame[indexDataGame].colorText =
                constantsColorsText.letterPositionIncorrect;

            keyboardGame[indexDataKeyboard].backColor =
                constantsColorsBackColor.letterPositionIncorrect;
            keyboardGame[indexDataKeyboard].colorText =
                constantsColorsText.letterPositionIncorrect;
        }
    });
    setDataGameAnswer(dataGame);
    setDataGameKeyBoard(keyboardGame);
};

const verifyHitCorrectWord = (resultVerifyWord: WordExist): boolean => {
    const itemsSuccess = resultVerifyWord.models.map((item) => {
        if (item.status == statusWord.letterCorrect) {
            return 1;
        }
        return 0;
    });
    if (
        itemsSuccess.filter((x) => x == 1).length == configGame.numberLetterWord
    ) {
        Alert.alert("Parabéns", "Você acertou a palavra de hoje");
        return true;
    }
    return false;
};

const incrementCurrentWord = (
    currentWord: CurrentWord,
    setCurrentWord: React.Dispatch<React.SetStateAction<CurrentWord>>
): void => {
    const currentWordAux = { ...currentWord };
    currentWordAux.word = [];
    currentWordAux.numberWord++;
    setCurrentWord(currentWordAux);
};

const verifyWordExist = async (
    currentWord: CurrentWord
): Promise<WordExist> => {
    const wordStr = currentWord.word.map((x) => x.value).join("");
    const existWord = await wordApiService.getWordByText(wordStr);
    if (!existWord) {
        throw new Error("Palavra digitada não encontrada");
    }
    let response: WordExist = {
        models: [],
    };
    const todayWord = "FAZER";
    for (let i = 0; i < wordStr.length; i++) {
        if (wordStr[i] == todayWord[i]) {
            response.models.push({
                dataGamePosition: currentWord.word[i].index + "",
                status: statusWord.letterCorrect,
                value: wordStr[i],
            });
        } else if (todayWord.includes(wordStr[i])) {
            response.models.push({
                dataGamePosition: currentWord.word[i].index + "",
                status: statusWord.letterPositionIncorrect,
                value: wordStr[i],
            });
        } else {
            response.models.push({
                dataGamePosition: currentWord.word[i].index + "",
                status: statusWord.notExist,
                value: wordStr[i],
            });
        }
    }

    return response;
};

const validOkClickLetterUndefined = (
    key: GameButtonAnswers,
    currentWord: CurrentWord
): void => {
    if (
        currentWord.word.length < configGame.numberLetterWord &&
        key.id == configGame.idBtnOk
    ) {
        throw new Error("Digite todas as letras da palavra antes dar OK");
    }
};

const validBackspaceClickLettersEmpty = (
    key: GameButtonAnswers,
    currentWord: CurrentWord
): void => {
    if (currentWord.word.length <= 0 && key.id == configGame.idBtnBack) {
        throw new Error(
            "Não é possível apagar, pois não há nenhuma letra foi informada ainda"
        );
    }
};

const validLetterClickNumberAttemptsExceeded = (
    key: GameButtonAnswers,
    currentWord: CurrentWord
): void => {
    if (
        currentWord.word.length >= configGame.numberLetterWord &&
        key.id != configGame.idBtnBack
    ) {
        throw new Error(
            `Não é possível digitar mais nenhuma letra pois a palavra deve ter no máximo ${configGame.numberLetterWord} letras`
        );
    }
};
