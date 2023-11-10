// Se importa el módulo dotenv para cargar las variables de entorno desde un archivo .env. Esto permite almacenar información de configuración, como puertos y claves secretas, fuera del código fuente y configurarlas de forma segura.
require('dotenv').config();
//Se importa la aplicación Express desde el archivo './src/app/app'. Esto implica que la lógica principal de la aplicación, incluyendo rutas y middleware, se encuentra en ese archivo.
const app = require('./src/app/app')
// Se configura el puerto en el cual el servidor Express escuchará las solicitudes HTTP. La variable process.env.PORT se utiliza para obtener el puerto de las variables de entorno si está definido, de lo contrario, se utilizará el puerto 8080 de forma predeterminada.
const port = process.env.PORT || 8080;
// Se importa la función dbConnection desde el archivo './src/database/conexion'. Esta función se encarga de establecer una conexión a la base de datos MongoDB usando Mongoose.
const { dbConnection } = require('./src/database/conexion') //Luego, se ejecuta la función dbConnection() para iniciar la conexión a la base de datos.
// Se inicia el servidor Express para escuchar las solicitudes HTTP en el puerto configurado (port).
app.listen(port, ()=> console.log(`Server conectado y corriendo en el puerto ${port}`)); //uando el servidor se inicia con éxito, se muestra un mensaje en la consola indicando el puerto en el que se está ejecutando.

dbConnection();