import { appStore, authSliceAction } from "../store/appStore";
import api from "./auth";
import { requestNewAccessToken } from "../helper/access_token";

export function responseSuccessInterceptor(response) {
  return response;
}

export async function responseErrorInterceptor(error) {
  if (!error.response) {
    return Promise.reject(error);
  }
  console.log("error response.interceptor");

  const originalConfig = error.config;

  if (error.response?.status === 401 && !originalConfig._retry) {
    originalConfig._retry = true;

    const newAccToken = await requestNewAccessToken();

    appStore.dispatch(authSliceAction.setAccessToken(newAccToken));
    api.defaults.headers.Authorization = "Bearer " + newAccToken;

    return api(originalConfig);
  }

  return Promise.reject(error);
}
