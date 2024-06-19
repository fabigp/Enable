import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import AuthProvider from "./components/AuthProvider.jsx"; // Asegúrate de que este componente exista
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function WrappedApp() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

// Renderiza tu aplicación
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
