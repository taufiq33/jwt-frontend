import axios from "axios";
import { appStore } from "../store/appStore";

export function getAccessToken() {
  return appStore.getState().auth.accessToken;
}

export async function requestNewAccessToken() {
  try {
    const request = await axios.get("http://localhost:5000/api/token", {
      withCredentials: true,
    });
    const newAccToken = request.data.access_token;
    return newAccToken;
  } catch (error) {
    return Promise.reject(error);
  }
}
