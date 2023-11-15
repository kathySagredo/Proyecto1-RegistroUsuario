import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

// Crea un nodo raíz de ReactDOM para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( // React.StrictMode, que es una herramienta de desarrollo que ayuda a detectar prácticas problemáticas en el código.
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
