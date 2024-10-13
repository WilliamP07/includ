import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const emotionApi = axios.create({
    baseURL: "/api/web/emotion",
});

// emotionApi.interceptors.request.use(interceptorRequest);
// emotionApi.interceptors.response.reject(interceptorReponse);

export default emotionApi;
