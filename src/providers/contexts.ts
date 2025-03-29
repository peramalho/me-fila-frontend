import { createContext } from "react";
import { AuthContextType } from "./AuthProvider";

export const AuthContext = createContext<AuthContextType>({
  hostToken: null,
  roomId: null,
  login: () => {},
  logout: () => {},
});
