// createBrowserRouter: Esta función crea un enrutador basado en el navegador.
// Importa diferentes componentes
import { createBrowserRouter } from "react-router-dom"; 
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";
import App from "../App";
import Home from "../components/layouts/Home";
import Admin from "../components/admin/Admin";
import UserRegister from "../components/user-register/UserRegister";
import UserLogin from "../components/user-login/UserLogin";

const router = createBrowserRouter([
  // path (ruta), element (elemento a renderizar) y children (rutas secundarias anidadas).
  {
    path: "/", //La ruta principal / tiene rutas secundarias (children) para las páginas Home, About y Contact.
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/registro",
    element: <UserRegister />,
  },
  {
    path: "/login",
    element: <UserLogin />, 
  }
]);

export default router;
