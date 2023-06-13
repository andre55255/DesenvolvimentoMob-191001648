import { ColumnMapping, columnTypes, IStatement, sql } from "expo-sqlite-orm";

interface DataGame {
    id: number;
    isCorrectWordToday: boolean;
    isChancesFinished: boolean;
    wordToday: string;
    timestamp: number;
};

const configEntityDataGame: ColumnMapping<DataGame> = {
    id: { type: columnTypes.INTEGER },
    isChancesFinished: { type: columnTypes.BOOLEAN },
    isCorrectWordToday: { type: columnTypes.BOOLEAN },
    wordToday: { type: columnTypes.TEXT },
    timestamp: { type: columnTypes.DATETIME, default: () => new Date() }
}

// TODO Schemas sqlite
const statements: IStatement = {
    "202306012152_create_data_game": sql`
        
    `
};