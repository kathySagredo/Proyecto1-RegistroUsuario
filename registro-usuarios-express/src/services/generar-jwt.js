// Se importa el módulo jsonwebtoken, que es una librería utilizada para trabajar con tokens JSON Web (JWT). Los tokens JWT son una forma de autenticación y autorización en aplicaciones web y servicios.
const jwt = require("jsonwebtoken");

// Se define una función llamada generarJWT que toma un parámetro opcional llamado idUser con un valor predeterminado vacío. Esta función se utilizará para generar un token JWT que contiene información relacionada con un usuario.
const generarJWT = (idUser = "") => {
  // Se utiliza una promesa para manejar la generación del token. La función devuelve una nueva promesa que puede resolverse o rechazarse dependiendo de si la generación del token tiene éxito o no.
  return new Promise((resolve, reject) => {
    const payload = { idUser }; // Se crea un objeto payload que contiene la información que se incluirá en el token JWT. En este caso, solo se incluye la propiedad idUser, que se obtiene del parámetro de la función. Este objeto payload contendrá los datos que se desean codificar en el token.
    jwt.sign( // Se utiliza el método jwt.sign() para firmar el token JWT. Este método toma varios argumentos:
      payload, // El objeto que se incluirá en el token.
      process.env.SECRETORPRIVATEKEY, //La clave secreta (o clave privada) utilizada para firmar el token. Esta clave debe estar definida en las variables de entorno para mantenerla segura y fuera del código fuente.
      {
        expiresIn: "4h", //Opciones que incluyen la duración de validez del token. En este caso, el token será válido durante 4 horas a partir de su generación.
      },
      (err, token) => { // Una función de devolución de llamada (callback) que se ejecutará una vez que el token se haya generado.
        if (err) { // Si existe un error por lo tanto se rechaza la promesa (reject).
          console.log(err);
          reject("No se pudo generar el token");
        } else { // Si no existe un error, por lo tanto se resuelve la promesa (resolve).  
          resolve(token);
        }
      }
    );
  });
};

//Finalmente, se exporta la función generarJWT para que pueda ser utilizada en otros archivos de la aplicación para generar tokens JWT.
module.exports = {
  generarJWT,
};