import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layout/Root";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/Dashboard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
