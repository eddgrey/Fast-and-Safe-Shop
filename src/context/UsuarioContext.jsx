/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";
import { auth } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const UsuarioContext = createContext();

export const UsuarioProvaider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    auth.signOut();
  };

  return (
    <UsuarioContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
