import { Navigate, useLocation } from "react-router-dom";
import Paths from "./paths";
import { useAuth } from "hooks/useAuth";
import { LoadingScreen } from "global/components/async/LoadingScreen";

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  // 1. Validar Autenticación (¿Está logueado?)
  if (!user) {
    return <Navigate to={Paths.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
