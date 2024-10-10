import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const interestApi = axios.create({
    baseURL: "/api/web/interest",
});

// interestApi.interceptors.request.use(interceptorRequest);
// interestApi.interceptors.response.reject(interceptorReponse);

export default interestApi;
