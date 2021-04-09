import { createContext } from "react";

export const UserContext = createContext();

export const GlobalContext = ({ children }) => {
  return <UserContext.Provider value>{children}</UserContext.Provider>;
};
