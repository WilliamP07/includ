import axios from "axios";
// import { interceptorRequest, interceptorReponse } from "./interceptor";

const zoneApi = axios.create({
    baseURL: "/api/web/zone",
});

// zoneApi.interceptors.request.use(interceptorRequest);
// zoneApi.interceptors.response.reject(interceptorReponse);

export default zoneApi;
