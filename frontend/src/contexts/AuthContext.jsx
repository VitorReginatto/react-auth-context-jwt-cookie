/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getUser = async () => {
    try {
      const response = await api.get("/auth/getAuthenticatedUser", {
        withCredentials: true, // Inclui os cookies na requisição
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUser(response.data);
      } else {
        throw new Error("Not authorized");
      }
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

async function login(data) {

  try {
    const response = await api.post("/auth/signin", data, {
      withCredentials: true,
    });

    if (response.status === 200) {
      setIsAuthenticated(true);
      await getUser();
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    setErrors(error.message);
    setIsAuthenticated(false);
  }
}

async function logout() {
  try {
    await api.post("/auth/logout", {}, {
      withCredentials: true
    });
    setUser(null);
    setIsAuthenticated(false);
    return <Navigate to="/login" />;
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    setErrors(error.message);
  }
}

useEffect(() => {
  getUser();
}, []);

return (
  <AuthContext.Provider
    value={{ user, login, token, errors, loading, isAuthenticated, logout, getUser }}
  >
    {children}
  </AuthContext.Provider>
);
};