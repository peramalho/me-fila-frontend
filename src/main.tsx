import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { HomePage } from "./pages/home";
import { HostPage } from "./pages/host";
import { ROUTES } from "./constants/routes";
import { JoinPage } from "./pages/join";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.HOST} element={<HostPage />} />
        <Route path={ROUTES.JOIN} element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
