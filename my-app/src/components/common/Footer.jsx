// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React from 'react'

function Footer() {
  return ( // Renderiza el footer de la aplicación mediante un contenedor rojo fijado en la parte inferior de la pantalla
    <div className='container bg-danger fixed-bottom'>Este es el footer de la APP</div>
  )
}

export default Footer