import { ColumnMapping, columnTypes, IStatement, sql } from "expo-sqlite-orm";

export interface DataGame {
    id: number;
    isCorrectWordToday: boolean;
    isChancesFinished: boolean;
    wordToday: string;
    timestamp: number;
};

export const configEntityDataGame: ColumnMapping<DataGame> = {
    id: { type: columnTypes.INTEGER },
    isChancesFinished: { type: columnTypes.BOOLEAN, default: () => new Date() },
    isCorrectWordToday: { type: columnTypes.BOOLEAN, default: () => new Date() },
    wordToday: { type: columnTypes.TEXT },
    timestamp: { type: columnTypes.DATETIME, default: () => new Date() }
}

export const statements: IStatement = {
    "202306012152_create_data_game": sql`
        CREATE TABLE data_game (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            is_chances_finished BOOLEAN NOT NULL,
            is_correct_word_today BOOLEAN NOT NULL,
            word_today TEXT NOT NULL,
            timestamp DATETIME NOT NULL
        );
    `
};