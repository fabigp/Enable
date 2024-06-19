import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider"; 

const UpdateUser = ({ userId }) => {
  const { authToken } = useContext(AuthContext); 
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    name: "",
    lastname: "",
    badges: [],
    posts: [],
    favorites: [],
    following: [],
    strikes: null,
    country: "",
    state: "",
    city: "",
    institutions: [],
    avatar: "",
  });

  useEffect(() => {
    // Función para cargar los datos del usuario
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/${userId || authToken}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Manejar errores, como mostrar un mensaje de error al usuario
      }
    };

    if (userId || authToken) {
      fetchUserData();
    }
  }, [userId, authToken]); // Dependencias: userId y authToken para ejecutar el efecto cuando cambien

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/user/${userId}`,
        userData
      );
      console.log("Update successful:", response.data);
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir al usuario a la página de perfil actualizado
    } catch (error) {
      console.error("Error during update:", error);
      // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2>Update User</h2>
      <form
        onSubmit={handleUpdate}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          width: "100%",
        }}
      >
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            style={{ padding: "10px", margin: "10px 0" }}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            style={{ padding: "10px", margin: "10px 0" }}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={userData.country}
            onChange={handleChange}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={userData.state}
            onChange={handleChange}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleChange}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <button type="submit" style={{ padding: "10px", marginTop: "10px" }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
