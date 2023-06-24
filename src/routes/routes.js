import { Routes, Route } from "react-router-dom";
import Login from "../pages/Authorization/Login";
import { ProtectedRoute, PermittedRoute } from "./protectedRoutes";
import NotFound from "../pages/NotFound/NotFound";
import MainPage from "../pages/MainPage/MainPage";

function AppRoutes({ isAuth }) {
  return (
    <Routes>
      <Route element={<PermittedRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
