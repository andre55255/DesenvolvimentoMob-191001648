import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageSetItem = async (
    key: string,
    value: string
): Promise<boolean> => {
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const storageGetItem = async (key: string): Promise<string | null> => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const storageRemoveItem = async (key: string): Promise<boolean> => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const storageClear = async (): Promise<boolean> => {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
