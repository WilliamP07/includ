import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const departmentApi = axios.create({
    baseURL: "/api/web/department",
});

// departmentApi.interceptors.request.use(interceptorRequest);
// departmentApi.interceptors.response.reject(interceptorReponse);

export default departmentApi;
