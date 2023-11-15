// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React, { useEffect, useState } from 'react'

function EjemploEffect() {

    const [contador, setContador] = useState(0);

    // Se ejecuta siempre que el componente se renderiza (al montarse) y al cambiar el estado.
    useEffect(() => {
        console.log("Hola mundo desde el useEffect")
    });

    // Se ejecuta solo al cargar el componente
    useEffect(() => {
        console.log("Carga solo al renderizar el componente")
    }, []);

    // Se ejecuta al cargar el componente y cuando hay un cambio en el estado
    useEffect(() => {
        console.log("Carga cuando cambia el estado")
    }, [contador]);

  return (
    <div>
        <p>Contador es: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Click me</button>
    </div>
  )
}

export default EjemploEffect