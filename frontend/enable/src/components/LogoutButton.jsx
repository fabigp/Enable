import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const LogoutButton = () => {
  const { removeAuthToken } = useContext(AuthContext);

  const handleLogout = () => {
    removeAuthToken();
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default LogoutButton;
