import {
    configGame,
    constantsColorsBackColor,
    constantsColorsText,
    statusWord,
} from "../helpers/constants";
import { CurrentWord } from "../types/currentWord";
import { GameButtonAnswers } from "../types/gameButtonAnswer";
import { WordExist } from "../types/wordExist";

export const pressKeyboardBll = (
    key: GameButtonAnswers,
    currentWord: CurrentWord,
    setCurrentWord: React.Dispatch<React.SetStateAction<CurrentWord>>,
    dataGameAnswer: GameButtonAnswers[],
    setDataGameAnswer: React.Dispatch<React.SetStateAction<GameButtonAnswers[]>>
): boolean => {
    try {
        // const currentWordAix = {...currentWord};
        // currentWordAix.word = [];
        // setCurrentWord(currentWordAix);
        // return true;

        // Caso aperte no Ok e já esteja completa as letas
        if (
            currentWord.word.length >= configGame.numberLetterWord &&
            key.id == configGame.idBtnOk
        ) {
            handleOkClickWordCompleted(
                key,
                currentWord,
                setCurrentWord,
                dataGameAnswer,
                setDataGameAnswer
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
            wordUp.push({ value: key.text, dataGamePosition: key.id });
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

const handleOkClickWordCompleted = (
    key: GameButtonAnswers,
    currentWord: CurrentWord,
    setCurrentWord: React.Dispatch<React.SetStateAction<CurrentWord>>,
    dataGameAnswer: GameButtonAnswers[],
    setDataGameAnswer: React.Dispatch<React.SetStateAction<GameButtonAnswers[]>>
): void => {
    const wordStr = currentWord.word.map((x) => x.value).join("");
    const resultVerify: WordExist = verifyWordExist(wordStr);

    const dataGame = [...dataGameAnswer];
    resultVerify.models.forEach((item) => {
        const indexDataGame = dataGame.findIndex(
            (x) => x.id == item.dataGamePosition
        );
        if (item.status == statusWord.notExist) {
            dataGame[indexDataGame].backColor =
                constantsColorsBackColor.notExist;
            dataGame[indexDataGame].colorText = constantsColorsText.notExist;
        } else if (item.status == statusWord.letterCorrect) {
            dataGame[indexDataGame].backColor =
                constantsColorsBackColor.letterCorrect;
            dataGame[indexDataGame].colorText =
                constantsColorsText.letterCorrect;
        } else if (item.status == statusWord.letterPositionIncorrect) {
            dataGame[indexDataGame].backColor =
                constantsColorsBackColor.letterPositionIncorrect;
            dataGame[indexDataGame].colorText =
                constantsColorsText.letterPositionIncorrect;
        }
        setDataGameAnswer(dataGame);
    });
};

const verifyWordExist = (word: string): WordExist => {
    // TODO
    return { models: [] };
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
