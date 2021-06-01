import { tipoUsuarioContext } from "../context/TipoUsuarioContext";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import LinksNavegacion from "./LinksNavegacion";
import LinksCuenta from "./LinksCuenta";
import logo from "../img/LogoSinFondo.png";

const Nav = () => {
  const [display, setDisplay] = useState("flex");
  const location = useLocation();
  const { tipoUsuario } = useContext(tipoUsuarioContext);

  useEffect(() => {
    if (
      location.pathname === "/registro" ||
      location.pathname === "/login" ||
      location.pathname === "/tipo-cuenta" ||
      location.pathname === "/recuperar" ||
      location.pathname === "/nuevo-password"
    ) {
      setDisplay("hidden");
    } else {
      setDisplay("flex");
    }
  }, [location]);

  return (
    <nav
      className={`${display} flex-col max-w-screen text-blueGray-100 bg-blueGray-800 `}
    >
      <div className="links-cuenta">
        <Link to={tipoUsuario === "administrador" ? "/usuarios" : "/"}>
          <img src={logo} alt="logo" className="md:h-20 h-14" />
        </Link>
        <Search />
        <div className="flex flex-row w-1/2 md:w-1/3 justify-between">
          <LinksCuenta />
        </div>
      </div>
      <LinksNavegacion />
    </nav>
  );
};

export default Nav;
