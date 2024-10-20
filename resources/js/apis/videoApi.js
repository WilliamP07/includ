import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const videoApi = axios.create({
    baseURL: "/api/web/video",
});

// videoApi.interceptors.request.use(interceptorRequest);
// videoApi.interceptors.response.reject(interceptorReponse);

export default videoApi;
