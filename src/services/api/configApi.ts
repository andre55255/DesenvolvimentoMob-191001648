import { constantsApi } from "../../helpers/constants";
import axios from "axios";

const configApi = axios.create({
    baseURL: constantsApi.baseUrl,
    headers: {
        "key": constantsApi.auth.key,
        "system": constantsApi.auth.system,
    },
    timeout: constantsApi.timeout
});

export default configApi;