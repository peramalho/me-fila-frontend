import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { ROUTES } from "./constants/routes";
import { JoinPage } from "./pages/JoinPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CREATE} element={<CreatePage />} />
        <Route path={ROUTES.JOIN} element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
