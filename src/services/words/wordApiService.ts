import { constantsApi } from './../../helpers/constants';
import { getRequest } from "../api/get";
import { Word } from "../../types/api";

const getWordByText = async (text: string): Promise<boolean> => {
    try {
        const response = await getRequest<Word>(`${constantsApi.endpoints.word.getByText}/${text}`);
        return response.success && response.object != null;
    } catch (err) {
        const error = err as Error;
        throw new Error(`Falha ao verificar palavra: ${error.message}`);
    }
};

export default { getWordByText };
