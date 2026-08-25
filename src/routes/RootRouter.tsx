import { Route, Routes } from "react-router-dom";
import Paths from "./paths";

import { Register } from "pages/auth/Register/Register";
import { Login } from "pages/auth/Login/Login";

import { ProtectedRoute } from "./ProtectedRoute";
import { ForgotPassword } from "pages/auth/ForgotPassword/ForgotPassword";
import { ResetPassword } from "pages/auth/ResetPassword/ResetPassword";
import { EmailVerified } from "pages/auth/EmailVerified/EmailVerified";
import { Home } from "pages/Home/Home";
import { PublicRoute } from "./PublicRoute";
import { CheckEmailForPasswordReset } from "pages/auth/CheckEmailForPasswordReset/CheckEmailForPasswordReset";
import { VerifyEmail } from "pages/auth/VerifyEmail/VerifyEmail";

export const RootRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route
        path={Paths.REGISTER}
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path={Paths.VERIFY_EMAIL}
        element={
          <PublicRoute>
            <VerifyEmail />
          </PublicRoute>
        }
      />
      <Route
        path={Paths.EMAIL_VERIFIED}
        element={
          <PublicRoute>
            <EmailVerified />
          </PublicRoute>
        }
      />
      <Route
        path={Paths.LOGIN}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path={Paths.FORGOT_PASSWORD}
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />
      <Route
        path={Paths.CHECK_EMAIL_FOR_PASSWORD_RESET}
        element={
          <PublicRoute>
            <CheckEmailForPasswordReset />
          </PublicRoute>
        }
      />
      <Route
        path={Paths.RESET_PASSWORD}
        element={
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        }
      />

      {/* Private routes */}
      <Route
        path={Paths.HOME}
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
