import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { messageToShowContext } from "../context/MessageToShowContext";
import { tipoUsuarioContext } from "../context/TipoUsuarioContext";

const LinksCuenta = () => {
  const { tipoUsuario, setTipoUsuario } = useContext(tipoUsuarioContext);
  const { setMessageToShow } = useContext(messageToShowContext);

  const carrito = () => {
    if (tipoUsuario === "noRegistrado") {
      setMessageToShow("Se necesita iniciar sesión");
      historial.push("/login");
    } else {
      historial.push("/carrito");
    }
  };

  const historial = useHistory();

  const logout = () => {
    setTipoUsuario("noRegistrado");
    setTimeout(() => historial.push("/"), 3000);
  };

  return tipoUsuario === "noRegistrado" ? (
    <>
      <Link to="/login">
        <div className="flex flex-row">
          <div>Iniciar sesión</div>
        </div>
      </Link>
      <Link to="/tipo-cuenta">Crea tu cuenta</Link>
      <button onClick={carrito}>
        <i className="fas fa-shopping-cart fa-lg"></i> Carrito
      </button>
    </>
  ) : tipoUsuario === "comprador" ? (
    <>
      <Link to="/mi-cuenta">
        <div className="flex flex-row">
          <i className="fas fa-user fa-lg"></i>
          <p className="ml-2">Mi cuenta</p>
        </div>
      </Link>
      <button onClick={logout}>Cerrar sesión</button>
      <button onClick={carrito}>
        <i className="fas fa-shopping-cart fa-lg"></i> Carrito
      </button>
    </>
  ) : (
    <>
      <Link to="/mi-cuenta">
        <div className="flex flex-row">
          <i className="fas fa-user fa-lg"></i>
          <p className="ml-2">Mi cuenta</p>
        </div>
      </Link>
      <button onClick={logout}>Cerrar sesión</button>
    </>
  );
};

export default LinksCuenta;
