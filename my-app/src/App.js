
import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom"; //Outlet se utiliza para representar la salida de las rutas anidadas. En este caso, se espera que se utilice dentro de un componente que tenga rutas anidadas.
function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;

