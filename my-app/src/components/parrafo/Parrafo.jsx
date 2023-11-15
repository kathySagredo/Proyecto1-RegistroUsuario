// Importa el componente Button de la carpeta button
// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React from "react";
import Button from "../button/Button";
import "./parrafo.css";

const Parrafo = () => {
  return (
    <>
    <p className="componente-parrafo-p">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim iure
      voluptatem, minus expedita eaque esse fugit hic nisi facere perspiciatis
      pariatur aut architecto magnam harum similique maxime molestiae nam
      deserunt?
    </p>
    <Button />
    </>
  );
};

export default Parrafo;