import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const genderApi = axios.create({
    baseURL: "/api/web/gender",
});

// genderApi.interceptors.request.use(interceptorRequest);
// genderApi.interceptors.response.reject(interceptorReponse);

export default genderApi;
