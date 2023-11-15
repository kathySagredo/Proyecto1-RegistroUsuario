// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React from 'react'
// Recordar: los componentes son funciones o clases que devuelven elementos React (representación de la interfaz de usuario).
function Admin() {
  return (
    <div>Este es el componente de admin</div> //Elemento JSX
  )
}

// El componente Admin se exporta, esto significa que este componente puede ser importado y utilizado en otros archivos de JavaScript.
export default Admin