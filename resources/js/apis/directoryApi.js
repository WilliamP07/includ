import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const directoryApi = axios.create({
    baseURL: "/api/web/directory",
});

// directoryApi.interceptors.request.use(interceptorRequest);
// directoryApi.interceptors.response.reject(interceptorReponse);

export default directoryApi;
