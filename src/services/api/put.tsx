import { AxiosResponse } from "axios";
import { ApiResponse } from "../../types/api";
import api from "./configApi";

async function putRequest<T>(
    path: string,
    body: any = {},
): Promise<ApiResponse<T>> {
    const response: ApiResponse<T> = {
        success: false,
    };
    try {
        await api
            .put(path, body)
            .then((result: AxiosResponse) => {
                response.success = result.data?.success;
                response.object =
                    result.data?.object !== null
                        ? (result.data.object as T)
                        : null;
                response.statusCode = result.status;
                response.message = result.data?.message;
            })
            .catch(async (err) => {
                if (err.response) {
                    switch (err.response.status) {
                        case 400:
                            response.message = err.response.data?.message;
                            response.statusCode = 400;
                            break;
                        case 401:
                            response.message = "Acesso negado";
                            response.statusCode = 401;
                            break;
                        case 409:
                            response.message = err.response.data?.message;
                            response.statusCode = 409;
                            break;
                        case 500:
                            response.message = err.response.data?.message;
                            response.statusCode = 500;
                            break;
                        default:
                            response.message = "Falha inesperada";
                            response.statusCode = err.response.status;
                    }
                } else {
                    response.message =
                        "Ops, falha inesperada em nosso sistema. Desculpe-nos pelo transtorno";
                    response.statusCode = 500;
                }
            });
        return response;
    } catch (err) {
        response.success = false;
        response.message =
            "Ops, falha inesperada em nosso sistema. Desculpe-nos pelo transtorno";
        response.statusCode = 500;
        return response;
    }
}

export { putRequest };
