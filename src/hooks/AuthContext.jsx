import React, { createContext, useContext, useState } from "react";
import { login as apiLogin, logout as apiLogout, readJwtToken } from "../apiFacade";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? readJwtToken(token) : {username: "", roles: []};
  });

  const [loggedIn, setLoggedIn] = useState(!!user);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      const user = await apiLogin(username, password);
      setUser(user);
      setLoggedIn(true);
      setError(null); // Clear error on successful login
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message);
    }
  };

  const logout = () => {
    apiLogout();
    setUser({ username: "", roles: [] });
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}