import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider"; // Importar el contexto de autenticación

const UserInfo = ({ userId }) => {
  const { authToken } = useContext(AuthContext); // Obtener el token de autenticación del contexto
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Función para cargar los datos del usuario
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/${userId || authToken}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        // Manejar errores, como mostrar un mensaje de error al usuario
      }
    };

    if (userId || authToken) {
      fetchUser();
    }
  }, [userId, authToken]); // Dependencias: userId y authToken para ejecutar el efecto cuando cambien

  return (
    <div>
      <h2>User Information</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Name: {user.name}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Badges: {user.badges.join(", ")}</p>
          <p>Posts: {user.posts.length}</p>
          <p>Favorites: {user.favorites.length}</p>
          <p>Following: {user.following.length}</p>
          <p>Strikes: {user.strikes}</p>
          <p>Country: {user.country}</p>
          <p>State: {user.state}</p>
          <p>City: {user.city}</p>
          <p>Institutions: {user.institutions.join(", ")}</p>
          {user.avatar && (
            <img src={user.avatar} alt="Avatar" style={{ maxWidth: "100px" }} />
          )}
        </div>
      ) : (
        <p>
          {userId || authToken
            ? "Loading user information..."
            : "User not authenticated"}
        </p>
      )}
    </div>
  );
};

export default UserInfo;
