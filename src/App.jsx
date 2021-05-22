import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import CrearCuenta from './components/CrearCuenta'
import Login from './components/Login'
import Nav from './components/Nav'
import Comprar from './components/Comprar'
import Carrito from './components/Carrito'
import VerProducto from './components/VerProducto'
import Home from './components/Home'
import NuevoPassword from "./components/NuevoPassword"
import Historial from './components/Historial'
import Catalogo from "./components/Catalogo"
import Recuperar from './components/Recuperar'
import { CurrentLocationProvaider } from './context/CurrentLocationContext'
import Domicilio from "./components/Domicilio"
import Cuenta from "./components/Cuenta"

const App = () => {

    return (
        <CurrentLocationProvaider>
            <Router>
            <main className="min-h-screen min-w-full bg-blueGray-200">
                    <Nav/>
                    <Switch>
                        <Route exact path="/" >
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/registro">
                            <CrearCuenta/>
                        </Route>
                        <Route path="/nuevo-password" component={NuevoPassword}/>
                        <Route path="/Catalogo" component={Catalogo} />
                        <Route path="/VerProducto" component={VerProducto}/>
                        <Route path="/domicilio" component={Domicilio} />
                        <Route path="/comprar" component={Comprar} />
                        <Route path="/historial" component={Historial} />   
                        <Route path="/carrito" component={Carrito} />
                        <Route path="/recuperar" component={Recuperar} />
                        <Route path="/cuenta" component={Cuenta}/>
                    </Switch>
            </main>
            </Router>
        </CurrentLocationProvaider>
    )
}

export default App
