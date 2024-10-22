import { createBrowserRouter, Outlet } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import NotFound from "../components/404";
import Products from "../pages/Products";
import User from "../pages/User";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/produtos", element: <Products /> },
      { path: "/usuario", element: <User /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/*", element: <NotFound /> },
]);
