// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React from 'react'
import NavBar from '../nav/NavBar' // Se esta importando el NavBar de la carpeta nav

function Header() {
  return (
    <div className='container bg-success px-4 py-3'>
        <h1>Este es el header de la APP</h1>
        <NavBar />
    </div>
  )
}

export default Header