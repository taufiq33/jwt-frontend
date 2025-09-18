import { redirect } from "react-router-dom";
import api from "../api/auth";
import { appStore, authSliceAction } from "../store/appStore";

export async function action() {
  try {
    await api.delete("/users/logout");

    appStore.dispatch(authSliceAction.clearAuth());

    return redirect("/login");
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
}
