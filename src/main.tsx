import "./index.css";
import "./tooltip";
import { BrowserRouter, Routes, Route } from "react-router";
import { DashboardPage } from "./DashboardPage.tsx";
import { AccountPage } from "./AccountPage.tsx";
import { NewPage } from "./NewPage.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route path="new" element={<NewPage />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>,
);
