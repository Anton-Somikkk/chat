import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ redirectPath = "/login" }) {
  const isAllowed = localStorage.getItem("widToken");
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
export function PermittedRoute({ redirectPath = "/" }) {
  const isAllowed = localStorage.getItem("widToken");

  if (isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}
