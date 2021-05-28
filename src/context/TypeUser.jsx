import { createContext, useState } from "react";

export const currentTypeUserContext = createContext();

export const CurrentLocationProvaider = ({ children }) => {
  const [typeUser, setTypeUser] = useState("noRegistrado");
  return (
    <currentTypeUserContext.Provider value={{ typeUser, setTypeUser }}>
      {children}
    </currentTypeUserContext.Provider>
  );
};
