import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CrearCuenta from './components/CrearCuenta'
import Header from './components/Header'
import Comprar from './components/Comprar'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

const App = () => {
    return (
        <main className="min-h-screen min-w-full bg-blueGray-200">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Producto/>
                    </Route>
                    <Route path="/login">
                        <Comprar/>
                    </Route>
                    <Route path="/registro">
                        <CrearCuenta/>
                    </Route>
                    <Route path="comprar">
                        <Comprar/>
                    </Route>
                    <Route path="/carrito">
                        <Carrito />
                    </Route>
                </Switch>
            </Router>
        </main>
    )
}

export default App
