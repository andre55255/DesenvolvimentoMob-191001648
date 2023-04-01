import { ApiResponse } from "../../types/api";
import api from "./configApi";

async function postRequest<T>(
    path: string,
    body: any = {},
): Promise<ApiResponse<T>> {
    const response: ApiResponse<T> = {
        success: false,
    };
    try {
        const result = await api.post(path, body);
        if (result && (result.status === 200 || result.status === 201)) {
            response.success = result.data?.success;
            response.object =
                result.data?.object !== null ? (result.data.object as T) : null;
            response.statusCode = result.status;
            response.message = result.data?.message;
        } else {
            if (result.status === 401) {
                response.message = "Acesso negado";
                response.statusCode = 401;
                return response;
            } else {
                response.message = result.data?.message;
                response.statusCode = result.status;
                return response;
            }
        }
        return response;
    } catch (err) {
        response.success = false;
        response.message =
            "Ops, falha inesperada em nosso sistema. Desculpe-nos pelo transtorno";
        response.statusCode = 500;
        return response;
    }
}

export { postRequest };
