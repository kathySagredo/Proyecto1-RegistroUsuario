// Recordar: JSX es una extensión de JavaScript que permite escribir código similar a HTML en archivos de JavaScript
// Se está importando la biblioteca de React. Cada archivo que contiene componentes debe importar la biblioteca de React para que pueda ser utilizado.
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"
// Importa la función useState de React, que permite a los componentes de función tener estado local.
// Importa la función useEffect de React, que se utiliza para realizar efectos secundarios en componentes funcionales.
// jwt-decode = Esta función se utiliza para decodificar tokens JWT (JSON Web Tokens)

const UserLogin = () => {
  // Estado local para el correo electrónico, contraseña para indicar si el usuario fue logueado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogueado, setUserLogueado] = useState({});
  const [userLocal, setUserLocal] = useState({});

  // Funciones para manejar cambios en los campos de entrada
  const handleEmail = (e) => { // El evento que escucha corresponde a la escritura en el input
    // e = evento // target = input // value = el valor del input del email
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {// Misma lógica
    // e = evento // target = input // value = el valor del input de la contraseña
    setPassword(e.target.value);
  };

  // Elimina la información del usuario almacenada en el almacenamiento local y recarga la página para simular un cierre de sesión.
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    }
  
  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
    // Construir un objeto de usuario con la información ingresada
    const user = {
      email: email,
      password: password,
    };
    // Limpiar los campos de entrada
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  
  // Realiza una solicitud POST al servidor con la información de inicio de sesión proporcionada por el usuario.
    fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Cabecera que indica que el contenido es de tipo JSON
      },
      body: JSON.stringify(user), //convertir objeto en JS en una cadena de texto en formato json
    })
      .then((response) => response.json())
      .then((data) => {  // Si la solicitud es exitosa, actualiza el estado userLogueado con la respuesta del servidor y almacena el token JWT en el almacenamiento local.
        setEmail("");
        setPassword("");
        setUserLogueado(data);
        const token = jwtDecode(JSON.stringify(data.token));
        console.log(token);
        localStorage.setItem("token", JSON.stringify(data.token));
      });
  };
  
  //Almacena la información del usuario en el almacenamiento local si el estado userLogueado tiene un status de 200.
  useEffect(() => {
    if (userLogueado.status === 200) { // Es necesario convertir a una cadena de texto JSON con stringify para ser almacenado en el local
      localStorage.setItem("user", JSON.stringify(userLogueado.data));
    }
  }, [userLogueado]);
 
  // Actualiza el estado userLocal con la información del usuario almacenada en el almacenamiento local.
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUserLocal(JSON.parse(localStorage.getItem("user"))); //obtiene el valor almacenado en el almacenamiento local. Este valor generalmente es una cadena de texto, ya que el almacenamiento local solo puede almacenar cadenas. Luego, JSON.parse se utiliza para convertir esa cadena JSON en un objeto de JavaScript.
    }
  }, [userLogueado]);

  // El componente devuelve el formulario JSX con los manejadores de eventos vinculados
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Formulario de registro</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={handleEmail}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={handlePassword}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {localStorage.getItem("user") !== null && (
              <div>
                <h3>Usuario logueado</h3>
                <p>Nombre: {userLocal.name}</p>
                <p>Apellido: {userLocal.lastName}</p>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button type="button" className="btn btn-primary" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
