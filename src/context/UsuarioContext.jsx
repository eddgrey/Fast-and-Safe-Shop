/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext();

export const UsuarioProvaider = ({ children }) => {
  const [compras, setCompras] = useState([]);

  return (
    <UsuarioContext.Provider value={(compras, setCompras)}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
