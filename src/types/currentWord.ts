export interface CurrentWord {
    word: WordCurrentType[];
    numberWord: number;
}

export interface WordCurrentType {
    index: number;
    value: string;
    dataGamePosition: string;
}
