// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

function PersonList() {
  const [data, setData] = useState([]);
  const [personas, setPersonas] = useState([]);

  // Función para mostrar la lista de personas
  const mostrarPersonas = () => {
    setPersonas(data); // Actualiza el estado con los datos, data = Almacena la información de las personas obtenida de la API.
  };

  // Función para eliminar la lista de personas
  const deletePersonas = () => {
    setPersonas([]); // Actualiza el estado con un arreglo vacio
  };

  // Efecto para obtener datos de una API al montar el componente
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data)); // Los datos obtenidos se almacenan en el estado data mediante setData.
  }, []);


  return (
    <div>
      <h1>Lista de personas</h1>
      <button onClick={mostrarPersonas}>Mostrar lista</button>
      <button onClick={deletePersonas}>Borrar lista</button>

      {personas.map((person) => (
        <PersonCard
          key={person.id}
          nombrePersona={person.name}
          NombreUsuario={person.username}
          emailUsuario={person.email}
        />
      ))}
    </div>
  );
}

// Recordar: map es un método de los arreglos en JavaScript que se utiliza para iterar sobre cada elemento del arreglo y aplicar una función a cada elemento, en este caso personas.map itera sobre cada objeto person en el arreglo personas.
// Por cada iteración, se crea un componente PersonCard con sus respectivas propiedades.

export default PersonList;
