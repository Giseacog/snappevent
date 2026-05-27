import { Navigate, useLocation } from "react-router-dom";
import Paths from "./paths";
import type { PropsWithChildren } from "react";
import { useAuth } from "hooks/useAuth";

export const PublicRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  const isResetPassword = pathname === Paths.RESET_PASSWORD;

  if (user && !isResetPassword) {
    return <Navigate to={Paths.DEFAULT_AUTHENTICATED} replace />;
  }

  return children;
};
