// Se importa el módulo dotenv, que se utiliza para cargar variables de entorno desde un archivo .env. Esto es útil para mantener información de configuración, como las URL de conexión a la base de datos, fuera del código fuente y más segura.
// Se importa el módulo mongoose, que es una librería de Node.js para interactuar con bases de datos MongoDB.
require("dotenv").config();
const mongoose = require("mongoose");

// Se define una función llamada dbConnection que se encarga de establecer la conexión a la base de datos.
const dbConnection = async () => {
  try { // Se utiliza un bloque try-catch para manejar posibles errores durante el proceso de conexión a la base de datos.
    // Dentro del bloque try, se utiliza mongoose.connect(process.env.MONGO_URI) para establecer la conexión a la base de datos MongoDB. La URL de conexión se obtiene de la variable de entorno MONGO_URI, que se configura previamente a través del archivo .env. Esta URL debe contener la información necesaria para conectarse a la base de datos MongoDB, como la dirección del servidor y el nombre de la base de datos.
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Base de datos conectada"); // Si la conexión se establece con éxito, se imprime un mensaje en la consola indicando que la base de datos ha sido conectada.
  } catch (error) { // Si se produce algún error durante la conexión a la base de datos, se captura en el bloque catch. Se imprime el error en la consola y se lanza una nueva instancia de Error con un mensaje personalizado indicando que hubo un problema al iniciar la base de datos.
    console.log(error);
    throw new Error("Error a la hora de iniciar la base de datos"); // Cuando se lanza una excepción utilizando throw, se interrumpe el flujo normal del programa y se pasa el control a un bloque catch o, si no hay ningún bloque catch que maneje la excepción, el programa se detiene y muestra el mensaje de error en la consola.
  }
};

// Finalmente, se exporta la función dbConnection para que pueda ser utilizada en otros archivos de la aplicación.
module.exports = { dbConnection };