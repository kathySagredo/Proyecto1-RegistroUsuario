
// Se importa el módulo mongoose, que es una librería de Node.js utilizada para interactuar con bases de datos MongoDB.
const mongoose = require('mongoose');
// Se utiliza la desestructuración para extraer el objeto Schema de la instancia de mongoose.
const { Schema } = mongoose;

// Creación del schema
// Se crea un esquema llamado userSchema que define la estructura de los documentos de usuarios en la base de datos. Cada campo del esquema corresponde a una propiedad que tendrá cada documento de usuario en la base de datos. Los campos incluyen name, lastName, email, password, status, y rol.
const userSchema = new Schema({
    name: String, // Para cada campo, se especifica su tipo de dato, que en este caso es String. Esto indica que los valores almacenados en estos campos serán cadenas de texto.
    lastName: String,
    email: String,
    password: String,
    /* Para los campos status y rol, se utilizan restricciones adicionales: 
    enum especifica una lista de valores permitidos. Por ejemplo, status solo puede ser "active" o "inactive", y rol solo puede ser "admin" o "user".
    require se establece en true para indicar que estos campos son obligatorios y no pueden estar vacíos.
    default proporciona un valor predeterminado si no se especifica ninguno al crear un nuevo documento. Por ejemplo, si no se especifica el status, se establecerá automáticamente como "active". */
    status: { 
        type: String,
        enum: ['active', 'inactive'],
        require: true,
        default: 'active'
    },
    rol: {
        type: String,
        enum: ['admin', 'user'],
        require: true,
        default: 'user'
    }
})

// Creación del modelo
// Se crea un modelo de datos llamado User utilizando la función mongoose.model(). Este modelo está basado en el esquema userSchema que definiste anteriormente.
const User = mongoose.model('User', userSchema);
// El primer argumento de mongoose.model() es el nombre del modelo, que en este caso es "User". Este nombre se utilizará para interactuar con la colección de usuarios en la base de datos.
// El segundo argumento es el esquema userSchema, que define la estructura de los documentos de usuario en la colección.

// Finalmente, se exporta el modelo User para que pueda ser utilizado en otros archivos de la aplicación. Esto permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en la colección de usuarios de la base de datos MongoDB utilizando Mongoose.
module.exports = User;
