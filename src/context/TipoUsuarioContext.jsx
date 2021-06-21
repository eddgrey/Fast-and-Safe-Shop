/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

export const tipoUsuarioContext = createContext();

export const TipoUsuarioProvaider = ({ children }) => {
  const [tipoUsuario, setTipoUsuario] = useState("noRegistrado");
  // const entrega = format(sub(new Date(), { days: 4 }), "dd 'de' MMM 'de' yyyy");
  const [compras, setCompras] = useState([]);

  const [direccion, setDireccion] = useState({
    nombre: "",
    calle: "",
    cp: "",
    tel: "",
  });

  const u = [
    {
      nombre: "administrador",
      email: "administrador@email.com",
      password: "1234",
      tipoCuenta: "administrador",
      productos: [],
    },
    {
      nombre: "Comprador",
      email: "comprador@email.com",
      password: "1234",
      tipoCuenta: "comprador",
      productos: [],
    },
    {
      nombre: "Vendedor",
      email: "vendedor@email.com",
      password: "1234",
      tipoCuenta: "vendedor",
      productos: [],
    },
  ];
  return (
    <tipoUsuarioContext.Provider
      value={{
        tipoUsuario,
        setTipoUsuario,
        compras,
        setCompras,
        u,
        direccion,
        setDireccion,
      }}
    >
      {children}
    </tipoUsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(tipoUsuarioContext);
