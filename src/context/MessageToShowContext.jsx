import { createContext, useState } from "react";

export const messageToShowContext = createContext();

// eslint-disable-next-line react/prop-types
export const MessageToShowProvaider = ({ children }) => {
  const [messageToShow, setMessageToShow] = useState("");

  return (
    <messageToShowContext.Provider value={{ messageToShow, setMessageToShow }}>
      {children}
    </messageToShowContext.Provider>
  );
};
