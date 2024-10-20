import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const imageFileApi = axios.create({
    baseURL: "/api/web/imageFile",
});

// imageFileApi.interceptors.request.use(interceptorRequest);
// imageFileApi.interceptors.response.reject(interceptorReponse);

export default imageFileApi;
