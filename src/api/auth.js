import axios from "axios";
import { includeAccessToken } from "./requestInterceptor";

import {
  responseSuccessInterceptor,
  responseErrorInterceptor,
} from "./responseInterceptor";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use(includeAccessToken);
api.interceptors.response.use(
  responseSuccessInterceptor,
  responseErrorInterceptor
);

export default api;
