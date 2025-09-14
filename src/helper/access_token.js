import { appStore } from "../store/appStore";

export function getAccessToken() {
  return appStore.getState().auth.accessToken;
}
