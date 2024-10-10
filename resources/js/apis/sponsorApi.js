import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const sponsorApi = axios.create({
    baseURL: "/api/web/sponsor",
});

// sponsorApi.interceptors.request.use(interceptorRequest);
// sponsorApi.interceptors.response.reject(interceptorReponse);

export default sponsorApi;
