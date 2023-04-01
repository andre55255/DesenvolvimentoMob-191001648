export const constantsColorsBackColor = {
    notExist: "#A7A7A7",
    letterCorrect: "#18A539",
    letterPositionIncorrect: "#D5BF4F",
    notSet: "#F5F5F5",
    btnEnter: "#153D2C",
    btnBack: "#CC0000",
};

export const constantsColorsText = {
    notExist: "#fff",
    letterCorrect: "#fff",
    letterPositionIncorrect: "#fff",
    notSet: "#000",
    btnEnter: "#fff",
    btnBack: "#fff",
};

export const constantsFontText = {
    sizeButtonAnswer: 17,
    sizeButtonKeyboard: 17,
};

export const configGame = {
    numberLetterWord: 5,
    numberWords: 6,
    idBtnBack: "BACK",
    idBtnOk: "OK"
};

export const asyncStorageKeys = {
    isCorrectWordToday: "@icwt",
    isChancesToday: "@ict",
    wordToday: "@wt",
    isLoadStorage: false
}

export const statusWord = {
    notExist: 0,
    letterCorrect: 1,
    letterPositionIncorrect: 2
}

export const constantsApi = {
    baseUrl: "http://192.168.230.116:8080",
    auth: {
        key: "batata-doce-palavra-io",
        system: "palavra-io"
    },
    timeout: 5000,
    endpoints: {
        word: {
            getByText: "/word/text"
        }
    }
}

export const constantsGame = {
    isCorrectWordToday: false,
    isChancesFinished: false,
    wordToday: "FAZER"
}