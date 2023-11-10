// Se importa el modelo User desde un archivo llamado user.model. Este modelo se utiliza para interactuar con la base de datos Y realizar operaciones relacionadas con los usuarios.
// Se importa el módulo bcrypt, que se utiliza para el hashing y verificación de contraseñas.
// Se importa una función generarJWT desde un archivo llamado generar-jwt, que se utiliza para generar tokens JWT (JSON Web Tokens) para la autenticación de usuarios.
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generarJWT } = require("../services/generar-jwt");

// gestionar la creacion de un usuario en la base de datos.

const crearUser = async (req, res) => { 
  const { name, lastName, email, password } = req.body; // Extrae los campos name, lastName, email y password de la solicitud HTTP (a través de req.body).

  if (!name || !lastName || !email || !password) { //Comprueba si todos los campos necesarios están presentes. Si falta alguno (false) con la negación se vuelve un true, entra al if y responde con un mensaje de error.
    return res.status(404).json({
      msg: "Todos los campos son requeridos",
      status: 404,
    });
  }
  try {
    //Utiliza bcrypt para generar una sal (salt) y luego hashea la contraseña proporcionada antes de almacenarla en la base de datos.
    const salt = bcrypt.genSaltSync(); //Su función principal es tomar una contraseña y convertirla en una cadena irreconocible y fija de caracteres, lo que hace que sea más difícil recuperar la contraseña original.

    await User.create({ // Crea un nuevo usuario en la base de datos utilizando el modelo User y los datos proporcionados en la solicitud.
      name: name,
      lastName: lastName,
      email: email,
      password: bcrypt.hashSync(password, salt),
    });

    // Responde con un mensaje de éxito si la operación se realiza correctamente o con un mensaje de error si hay algún problema.
    res.status(201).json({ 
      msg: "Usuario creado correctamente",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear el usuario",
      status: 500,
    });
  }
};

// gestionar el inicio de sesión de un usuario

const loginUser = async (req, res) => { 
  const { email, password } = req.body; // Extrae los campos email y password de la solicitud HTTP (a través de req.body).

  if ((!email, !password)) {
    return res.status(404).json({
      msg: "Todos los campos son requeridos",
      status: 404,
    });
  }

  try {
    const findUser = await User.findOne({ email: email }); // Busca un usuario en la base de datos que coincida con el correo electrónico proporcionado.
    
    //Comprueba si el usuario existe y si su estado es "activo". Si el usuario no existe o no está activo, responde con un mensaje de error.
    if (!findUser) { 
        return res.status(404).json({
        msg: `Usuario con email ${email} no encontrado`,
        status: 404,
      });
    }

    if (findUser.status !== "active") {
      return res.status(404).json({
        msg: `Usuario con email ${email} no está activo en el sistema`,
        status: 404,
      });
    }

    //verificar contraseña
    // Utiliza bcrypt para verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos.
    const passVerify = bcrypt.compareSync(password, findUser.password);

    if (!passVerify) { 
      return res.status(404).json({
        msg: `Contraseña incorrecta`,
        status: 404,
      });
    }
    // Si la contraseña es correcta, genera un token JWT utilizando la función generarJWT y lo incluye en la respuesta.
    const token = await generarJWT(findUser._id);

    res.status(200).json({ // Responde con un mensaje de éxito y los detalles del usuario, así como el token JWT.
      msg: `Usuario con email ${email} logueado correctamente`,
      status: 200,
      data: {
        name: findUser.name,
        lastName: findUser.lastName,
        email: findUser.email,
      },
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al loguear el usuario",
      status: 500,
    });
  }
};

// Esta función se encarga de buscar un usuario por su ID.
const getUserById = async (req, res) => { 
  const { iduser } = req.params; // Extrae el ID del usuario de los parámetros de la solicitud obtenida desde la url(a través de req.params).

  
  if (!iduser) { 
    return res.status(404).json({
      msg: "Id de usuario es requerido",
      status: 404,
    });
  }

  // Comprueba si el ID es válido y si está presente en la base de datos.
  if (iduser.length !== 24) {
    return res.status(404).json({
      msg: "Id de usuario no válido",
      status: 404,
    });
  }

  try {
    const user = await User.findOne({ _id: iduser }); // Con el id del modelo busca el id que coincida con la petición y lo asigna a una variable user

    if (!user) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
        status: 404,
      });
    }

    res.status(200).json({ // Si se encuentra el usuario, responde con los detalles del usuario
      msg: "Usuario encontrado exitosamente",
      data: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      },
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al buscar el usuario",
      status: 500,
    });
  }
};

// Esta función se encarga de actualizar el estado de un usuario a "inactive".
const updateUserById = async (req, res) => {
  const { iduser } = req.params; // Extrae el ID del usuario de los parámetros de la solicitud (a través de req.params).

  if (!iduser) { // Comprueba si el ID es válido y si el usuario existe en la base de datos.
    return res.status(404).json({
      msg: "Id de usuario es requerido",
      status: 404,
    });
  }

  if (iduser.length !== 24) {
    return res.status(404).json({
      msg: "Id de usuario no válido",
      status: 404,
    });
  }

  try {
    const changes = {
      status: "inactive",
    };

    const user = await User.findByIdAndUpdate(iduser, changes); // Si se encuentra el usuario, actualiza su estado a "inactive".

    if (!user) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
        status: 404,
      });
    }

    res.status(200).json({ // Responde con un mensaje de éxito.
      msg: "Usuario actualizado exitosamente",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al buscar el usuario",
      status: 500,
    });
  }
};

// crear controlador y ruta para actualizar el email de un usuario
// recibir por params el id del usuario
// recibir por body el nuevo email
// utilizar el metodode mongoose findByIdAndUpdate o findOneAndUpdate o updateOne

module.exports = {
  crearUser,
  loginUser,
  getUserById,
  updateUserById,
};
