import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const emotionTipApi = axios.create({
    baseURL: "/api/web/emotionTip",
});

// emotionTipApi.interceptors.request.use(interceptorRequest);
// emotionTipApi.interceptors.response.reject(interceptorReponse);

export default emotionTipApi;
