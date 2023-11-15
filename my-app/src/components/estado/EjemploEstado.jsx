
import React, { useState } from 'react'


function EjemploEstado() {

    const [contador, setContador ] = useState(0);
    const [nombre, setNombre] = useState('');
    /* const [productos, setProductos] = useState([]); */

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
    }

  return (
    <div className='container'>
        <h1>Contador</h1>
        <p>El valor del contador es: {contador}</p>
        <button className='btn btn-success' onClick={incrementar}>Incrementar</button>
        <button className='btn btn-danger' onClick={decrementar}>Decrementar</button>
        <button className='btn btn-warning' onClick={resetear}>Resetear</button>
        <hr />

        <div>
            <h1>Formulario</h1>
            <p>El nombre es: {nombre}</p>
            <input type="text" placeholder="Ingrese su nombre" onChange={(e) => setNombre(e.target.value)}/>
        </div>
        
    </div>
  )
}

export default EjemploEstado