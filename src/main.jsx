import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
