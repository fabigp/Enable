import React, { createContext, useState, useEffect } from "react";

// Crea el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    // Cargar el token del localStorage cuando el componente se monta
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const saveAuthToken = (token) => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
  };

  const removeAuthToken = () => {
    localStorage.removeItem("authToken");
    setAuthToken("");
  };

  return (
    <AuthContext.Provider value={{ authToken, saveAuthToken, removeAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
