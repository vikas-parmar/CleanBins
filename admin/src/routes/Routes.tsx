import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../modules/dashboard/Dashboard";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../modules/auth/pages/Login";

export const router = createBrowserRouter([
  {
    element: <Dashboard />,
    path: "/",
  },

  {
    element: <AuthLayout />,
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
