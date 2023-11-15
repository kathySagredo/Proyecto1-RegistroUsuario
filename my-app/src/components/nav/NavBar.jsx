
// Importa el componente Link de react-router-dom. Link se utiliza para crear enlaces en la aplicación React que gestionan la navegación sin recargar la página completa.
// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() { 
  // Se utilizan componentes Link para crear enlaces a diferentes rutas. Por ejemplo, <Link to="/">Home</Link> crea un enlace que lleva a la ruta principal ("/").
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light mx-0'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0 flex d-flex space-between'>
            <li className='nav-item px-3'><Link to="/" className='text-success'>Home</Link></li>
            <li className='nav-item px-3'><Link to="/contact" className='text-success'>Contact</Link></li>
            <li className='nav-item px-3'><Link to="/about" className='text-success'>About</Link></li>
        </ul>
    </div>
  )
}

export default NavBar