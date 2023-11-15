// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React from "react";

// Este componente recibe propiedades (props) como argumentos y renderiza una tarjeta (card) con la información de una persona.
function PersonCard(props) {
  // Desestructuración de las propiedades pasadas como argumentos
  const { nombrePersona, NombreUsuario, emailUsuario } = props;
  
  // Renderiza una tarjeta con la información de la persona
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Nombre: {nombrePersona}</h2>
        <p className="card-text">Nombre de usuario: {NombreUsuario}</p>
        <p>Email: {emailUsuario}</p>
      </div>
    </div>
  );
}

export default PersonCard;