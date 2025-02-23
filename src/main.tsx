import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { DashboardPage } from "./DashboardPage.tsx";
import { NewPage } from "./NewPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route path="new" element={<NewPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>,
);
