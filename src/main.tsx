import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { HomePage } from "./pages/home";
import { HostPage } from "./pages/host";
import { ROUTES } from "./constants/routes";
import { JoinPage } from "./pages/join";
import { HostIdPage } from "./pages/host/[id]";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.HOST}>
            <Route index element={<HostPage />} />
            <Route path=":id" element={<HostIdPage />} />
          </Route>
          <Route path={ROUTES.JOIN}>
            <Route index element={<JoinPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
