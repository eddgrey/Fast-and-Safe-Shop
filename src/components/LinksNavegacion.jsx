import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { tipoUsuarioContext } from "../context/TipoUsuarioContext";

const LinksNavegacion = () => {
  const { tipoUsuario } = useContext(tipoUsuarioContext);
  return tipoUsuario === "vendedor" ? (
    <section>
      <div className="link-navegacion">
        <Link to="/mis-productos">
          <p>Mis productos</p>
        </Link>
        <Link to="/nuevo-producto">
          <p>Nuevo producto</p>
        </Link>
        <p>Productos vendidos</p>
      </div>
    </section>
  ) : tipoUsuario === "administrador" ? (
    <section className="link-navegacion">
      <Link to="/usuarios">
        <p>Usuarios</p>
      </Link>
    </section>
  ) : (
    <div className="link-navegacion">
      <Link to="/catalogo">
        <p>Categorias</p>
      </Link>
      <Link to={tipoUsuario === "comprador" ? "/mis-pedidos" : "/login"}>
        <p>Mis pedidos</p>
      </Link>
    </div>
  );
};

export default LinksNavegacion;
