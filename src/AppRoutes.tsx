import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { ROUTES } from "./constants/routes";
import { HomePage } from "./pages/home";
import { HostPage } from "./pages/host";
import { JoinPage } from "./pages/join";
import { HostIdPage } from "./pages/host/[id]";
import { AuthContext } from "./providers/contexts";
import { useContext, useMemo } from "react";

export function AppRoutes() {
  const { hostToken } = useContext(AuthContext);
  const isAuthenticated = useMemo(() => Boolean(hostToken), [hostToken]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.HOST}>
          <Route index element={<HostPage />} />
          {isAuthenticated && <Route path=":id" element={<HostIdPage />} />}
        </Route>
        <Route path={ROUTES.JOIN}>
          <Route index element={<JoinPage />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
}
