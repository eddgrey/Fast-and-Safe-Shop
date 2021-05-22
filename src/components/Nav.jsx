import { useContext, useEffect, useState } from 'react'
import logo from "../img/LogoSinFondo.png"
import Search from './Search'
import { Link, useLocation } from "react-router-dom";
import { currentLocationContext } from '../context/CurrentLocationContext';

const Nav = () => {
    const { navHidden } = useContext(currentLocationContext)
    const [display, setDisplay] = useState("flex")
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/registro" || location.pathname === "/login" || location.pathname === "/recuperar" || location.pathname === "/nuevo-password") {
            setDisplay("hidden")
        } else {
            setDisplay("flex")
        }
    }, [location])

    console.log(location.pathname);

    return (
        <nav className={`${display} flex-col max-w-screen text-blueGray-100 bg-blueGray-800 `}>
            <div className="flex flex-row justify-around items-center bg-blueGray-900 min-w-full px-8 py-4 tracking-wide">
                <Link to="/">
                    <img src={logo} alt="logo" className=" h-20"/>
                </Link>
                <Search/>
                <div className="flex flex-row w-1/3 justify-between">
                    <Link to="/login">
                        <div className="flex flex-row">
                            {/* <i className="fas fa-user fa-lg"></i> */}
                            <div>Iniciar sesión</div>
                        </div>
                    </Link>
                    <Link to="/registro">
                        Crea tu cuenta
                    </Link>
                    <Link to="/carrito">
                        <span><i className="fas fa-shopping-cart fa-lg"></i> Carrito</span>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 flex flex-row py-2 justify-around">
                <Link to="/catalogo">
                    <p>Categorias</p>
                </Link>
                <p>Ofertas</p>
                <Link to="/historial">
                    <p>Historial</p>
                </Link>
                <Link to="/recuperar">
                    <p>Moda</p>
                </Link>
                <Link to="/cuenta">
                    <p>Vender</p>
                </Link>
                <p>Ayuda</p>
            </div>
        </nav>
    )
}

export default Nav
