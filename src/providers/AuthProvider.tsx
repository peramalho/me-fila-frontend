import { useCallback, useState } from "react";
import { AuthContext } from "./contexts";
import { HOST_TOKEN } from "../constants/localStorage";

export type AuthContextType = {
  hostToken: string | null;
  login: (hostToken: string) => void;
  logout: () => void;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [hostToken, setHostToken] = useState<string | null>(() => {
    const storedHostToken: string | null = localStorage.getItem(HOST_TOKEN);
    return storedHostToken;
  });

  const login = useCallback((currentHostToken: string) => {
    localStorage.setItem(HOST_TOKEN, currentHostToken);
    setHostToken(currentHostToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(HOST_TOKEN);
    setHostToken(null);
  }, []);

  return (
    <AuthContext.Provider value={{ hostToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
