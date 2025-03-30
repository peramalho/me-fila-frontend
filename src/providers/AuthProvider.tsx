import { useCallback, useState } from "react";
import { AuthContext } from "./contexts";
import { LocalStorage } from "../constants/localStorage";

export type AuthContextType = {
  hostToken: string | null;
  roomId: string | null;
  login: ({ hostToken, roomId }: { hostToken: string; roomId: string }) => void;
  logout: () => void;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [hostToken, setHostToken] = useState<string | null>(
    localStorage.getItem(LocalStorage.HOST_TOKEN)
  );
  const [roomId, setRoomId] = useState<string | null>(
    localStorage.getItem(LocalStorage.ROOM_ID)
  );

  const login = useCallback(
    ({
      hostToken: currentHostToken,
      roomId: currentRoomId,
    }: {
      hostToken: string;
      roomId: string;
    }) => {
      localStorage.setItem(LocalStorage.HOST_TOKEN, currentHostToken);
      localStorage.setItem(LocalStorage.ROOM_ID, currentRoomId);
      setHostToken(currentHostToken);
      setRoomId(currentRoomId);
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.clear();
    setHostToken(null);
  }, []);

  return (
    <AuthContext.Provider value={{ hostToken, roomId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
