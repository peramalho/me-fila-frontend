import { useCallback, useMemo, useState } from "react";
import { AuthContext } from "./contexts";
import { LocalStorage } from "../constants/localStorage";

export type AuthContextType = {
  hostToken: string | null;
  isAuthenticated: boolean;
  login: ({ hostToken, roomId }: { hostToken: string; roomId: string }) => void;
  logout: () => void;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [hostToken, setHostToken] = useState<string | null>(() => {
    const storedHostToken: string | null = localStorage.getItem(
      LocalStorage.HOST_TOKEN
    );
    return storedHostToken;
  });

  const isAuthenticated = useMemo(() => Boolean(hostToken), [hostToken]);

  const login = useCallback(
    ({
      hostToken: currentHostToken,
      roomId,
    }: {
      hostToken: string;
      roomId: string;
    }) => {
      localStorage.setItem(LocalStorage.HOST_TOKEN, currentHostToken);
      localStorage.setItem(LocalStorage.ROOM_ID, roomId);
      setHostToken(currentHostToken);
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.clear();
    setHostToken(null);
  }, []);

  return (
    <AuthContext.Provider value={{ hostToken, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
