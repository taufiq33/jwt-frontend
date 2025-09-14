import axios from "axios";
import { includeAccessToken } from "./requestInterceptor";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use(includeAccessToken);

export default api;
