/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const tipoUsuarioContext = createContext();

export const TipoUsuarioProvaider = ({ children }) => {
  const [tipoUsuario, setTipoUsuario] = useState("noRegistrado");
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
  console.log(tipoUsuario, u);
  return (
    <tipoUsuarioContext.Provider value={{ tipoUsuario, setTipoUsuario }}>
      {children}
    </tipoUsuarioContext.Provider>
  );
};
