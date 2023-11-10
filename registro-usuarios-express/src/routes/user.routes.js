/* Se importan las funciones controladoras crearUser, loginUser, getUserById y updateUserById desde el archivo '../controllers/user.controller'. Estas funciones manejan las operaciones relacionadas con los usuarios.
Se crea una instancia de un enrutador Express utilizando express.Router() y se almacena en la variable router. */

const { crearUser, loginUser, getUserById, updateUserById } = require('../controllers/user.controller');
const router = require('express').Router();

// Se definen varias rutas en el enrutador junto con los métodos HTTP correspondientes (POST y GET). Cada ruta está asociada a una función controladora específica que se ejecutará cuando se reciba una solicitud a esa ruta.
// crear un usuario
router.post('/crear', crearUser); // Para la creación de un usuario, se utiliza el método POST y la ruta '/crear'. Cuando se reciba una solicitud POST en esta ruta, se ejecutará la función crearUser del controlador.

// hacer login
router.post('/login', loginUser) // Para el inicio de sesión de un usuario, se utiliza el método POST y la ruta '/login'. Cuando se reciba una solicitud POST en esta ruta, se ejecutará la función loginUser del controlador.

// obtener un usuario por su id
router.get('/getbyid/:iduser', getUserById) // Para obtener un usuario por su ID, se utiliza el método GET y la ruta '/getbyid/:iduser'. Cuando se reciba una solicitud GET en esta ruta con un ID de usuario en la URL, se ejecutará la función getUserById del controlador.

// actualizar su información
router.put('/update/:iduser', updateUserById) // Para actualizar la información de un usuario por su ID, se utiliza el método PUT y la ruta '/update/:iduser'. Cuando se reciba una solicitud PUT en esta ruta con un ID de usuario en la URL, se ejecutará la función updateUserById del controlador.

// obtener listado de todos los usuarios



//Finalmente, el enrutador router se exporta para que pueda ser utilizado en el punto de entrada principal de la aplicación o en otros archivos donde se monte en la aplicación principal de Express.
module.exports = router;