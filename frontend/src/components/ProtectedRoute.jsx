/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, logout, getUser } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
   /*  const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      logout();
    } else {
      getUser();
    } */
      getUser();

  }, [location]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return loading ? <LoadingSpinner /> : children;
};

export default ProtectedRoute;