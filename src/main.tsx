import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./HomePage.tsx";
import { AccountPage } from "./AccountPage.tsx";
import { NewPage } from "./NewPage.tsx";
import { createRoot } from "react-dom/client";
import { MinePage } from "./MinePage.tsx";
import { NotePage } from "./NotePage.tsx";
import { Layout } from "./Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="mine" element={<MinePage />} />
        <Route path="new" element={<NewPage />} />
        <Route path="account" element={<AccountPage />} />
      </Route>
      <Route path="note/:noteId" element={<NotePage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>,
);
