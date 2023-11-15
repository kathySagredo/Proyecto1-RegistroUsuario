
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container ps-5 pt-5">
        <h1 className="text-success">Home</h1>
        <h2>Esta info es de importancia</h2>
        <Link className="text-danger" to="https://www.google.com">Enlace a Google</Link>
    </div>
  )
}

export default Home