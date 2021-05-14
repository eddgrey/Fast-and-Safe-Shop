import React from 'react'
import logo from "../img/logo.jpg"
import Search from './Search'
import { Link } from "react-router-dom";
import CrearCuenta from './CrearCuenta';

const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center max-w-scree pr-4 text-white bg-blueGray-800">
            <Link to="/">
                <img src={logo} alt="logo" className="h-24"/>
            </Link>
            <Search/>
            <Link to="/login">
                <div>Iniciar Sesion</div>
            </Link>
            <Link to="/registro">
                CrearCuenta
            </Link>
            <Link to="/carrito">
                Carrito
            </Link>
        </header>
    )
}

export default Header
