import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import CrearCuenta from "./components/CrearCuenta";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Comprar from "./components/Comprar";
import Carrito from "./components/Carrito";
import VerProducto from "./components/VerProducto";
import Home from "./components/Home";
import NuevoPassword from "./components/NuevoPassword";
import Catalogo from "./components/Catalogo";
import Recuperar from "./components/Recuperar";
import Domicilio from "./components/Domicilio";
import Cuenta from "./components/Cuenta";
import Categoria from "./components/Categoria";
import { TipoUsuarioProvaider } from "./context/TipoUsuarioContext";
import TipoCuenta from "./components/TipoCuenta";
import { CarritoProvaider } from "./context/CarritoContext";
import { ProductosProvaider } from "./context/ProductosContext";
import NuevoProducto from "./components/NuevoProducto";
import { MessageToShowProvaider } from "./context/MessageToShowContext";
import MetodosPago from "./components/MetodosPago";
import MisProductos from "./components/MisProductos";
import MisPedidos from "./components/MisPedidos";
import EstadoCompra from "./components/EstadoCompra";
import Tarjetas from "./components/Tarjetas";
import Usuarios from "./components/Usuarios";
import CrearCuenta from "../src/components/CrearCuenta.jsx";

const App = () => {
  return (
    <TipoUsuarioProvaider>
      <ProductosProvaider>
        <CarritoProvaider>
          <MessageToShowProvaider>
            <Router>
              <main className="min-h-screen min-w-full bg-blueGray-200">
                <Nav />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/registro" component={CrearCuenta} />
                  <Route path="/nuevo-password" component={NuevoPassword} />
                  <Route path="/Catalogo" component={Catalogo} />
                  <Route path="/ver-producto" component={VerProducto} />
                  <Route path="/domicilio" component={Domicilio} />
                  <Route path="/comprar" component={Comprar} />
                  <Route path="/carrito" component={Carrito} />
                  <Route path="/recuperar" component={Recuperar} />
                  <Route path="/mi-cuenta" component={Cuenta} />
                  <Route path="/categoria" component={Categoria} />
                  <Route path="/tipo-cuenta" component={TipoCuenta} />
                  <Route path="/metodo-pago" component={MetodosPago} />
                  <Route path="/tarjeta" component={Tarjetas} />
                  <Route path="/mis-productos" component={MisProductos} />
                  <Route path="/estado-compra" component={EstadoCompra} />
                  <Route path="/mis-pedidos" component={MisPedidos} />
                  <Route path="/nuevo-producto" component={NuevoProducto} />
                  <Route path="/usuarios" component={Usuarios} />
                </Switch>
              </main>
            </Router>
          </MessageToShowProvaider>
        </CarritoProvaider>
      </ProductosProvaider>
    </TipoUsuarioProvaider>
  );
};

export default App;
