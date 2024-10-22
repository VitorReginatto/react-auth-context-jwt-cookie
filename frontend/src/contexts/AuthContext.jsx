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
      const response = await api.get("/auth/getAuthenticatedUser",{
        withCredentials: true, 

      });

      if (response.status !== 200) {
        throw new Error("Not authorized");
      }

      setIsAuthenticated(true);
      setUser(response.data);
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false); 
    }
  };

  async function login(data) {
    try {
      const response = await api.post("/auth/signin", data,{
        withCredentials: true, // Permite o envio de cookies
      });

      const token = response.data.token;
      setToken(token);
      setIsAuthenticated(true);
      await getUser();
    } catch (error) {
      setErrors(error.message);
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