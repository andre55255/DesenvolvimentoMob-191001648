import { storageGetItem, storageSetItem } from "../services/asyncStorage/asyncStorageService";
import { asyncStorageKeys, constantsGame } from "./constants";

export const initailizeAsyncStorage = async (): Promise<void> => {
    try {
        console.log("Load async storage");
        
        const isCorrectWordToday = await storageGetItem(asyncStorageKeys.isCorrectWordToday);
        if (isCorrectWordToday == null) {
            await storageSetItem(asyncStorageKeys.isCorrectWordToday, "false");
            constantsGame.isCorrectWordToday = false;
        } else {
            constantsGame.isCorrectWordToday = isCorrectWordToday == "false" ? false : true;
        }

        const isChancesToday = await storageGetItem(asyncStorageKeys.isChancesToday);
        if (isChancesToday == null) {
            constantsGame.isChancesFinished = false;
            await storageSetItem(asyncStorageKeys.isChancesToday, "false");
        } else {
            constantsGame.isChancesFinished = isChancesToday == "false" ? false : true;
        }
        
        // TODO METHOD GET TODAY WORD
        const wordTodayApi = "FAZER"; 
        const wordToday = await storageGetItem(asyncStorageKeys.wordToday);
        if (wordToday == null) {
            await storageSetItem(asyncStorageKeys.wordToday, wordTodayApi);
            constantsGame.wordToday = wordTodayApi;
        }
        else {
            constantsGame.wordToday = wordToday;
        }
    } catch (err) {
        return;
    }
}