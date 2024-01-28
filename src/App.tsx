import Layout from "./components/site/Layout";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import ButtonPage from "./pages/Button";
import CardPage from "./pages/Card";
import InputPage from "./pages/Input";
import { HomePage } from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

export default function App() {
  

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )

}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Outlet /></Layout>}>
        <Route index={true} element={<HomePage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="input" element={<InputPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )

}


