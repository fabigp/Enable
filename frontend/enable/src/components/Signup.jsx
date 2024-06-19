import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const avatarUrl = "https://thispersondoesnotexist.com/image"; // URL simulada para el avatar

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/user", {
        username,
        password,
        name,
        lastname,
        badges: [],
        posts: [],
        favorites: [],
        following: [],
        strikes: 0,
        country,
        state,
        city,
        institutions: [0],
        avatar: avatarUrl,
      });
      console.log("Signup successful:", response.data);
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir al usuario a la página de inicio de sesión
    } catch (error) {
      console.error("Error during signup:", error);
      // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
    }
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
      <form
        onSubmit={handleSignup}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", margin: "10px 0" }}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", margin: "10px 0" }}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ padding: "10px", margin: "10px 0" }}
          />
        </label>
        <button type="submit" style={{ padding: "10px", marginTop: "10px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
