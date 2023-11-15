// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React from 'react'

const Button = () => {
  return ( // Renderiza un botón con clases de estilo de Bootstrap y un evento de click
        <button className="btn btn-success" onClick={() => alert("Hola mundo")}>Click me</button> //Cuando el botón hace clic, se ejecuta la función () => alert("Hola mundo"), que muestra una alerta con el mensaje "Hola mundo". El botón también tiene las clases de estilo "btn" y "btn-success" de Bootstrap.
  )
}

export default Button