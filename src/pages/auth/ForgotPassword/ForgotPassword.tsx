import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Paths from "routes/paths";
import { ForgotPasswordForm } from "./components/ForgotPasswordForm";
import { AuthLayout } from "layouts/AuthLayout";
import { TEXTS } from "global/texts";

export const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <div className="bg-primary-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-200">
          <Building2 className="text-white w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-primary-900">
          {TEXTS.auth.forgotPassword.title}
        </h1>
        <p className="text-primary-600 mt-2 text-sm">
          {TEXTS.auth.forgotPassword.description}
        </p>
      </div>

      <ForgotPasswordForm />

      <div className="text-center mt-6">
        <Link
          to={Paths.LOGIN}
          className="text-sm text-primary-600 hover:underline"
        >
          {TEXTS.auth.forgotPassword.backToLogin}
        </Link>
      </div>
    </AuthLayout>
  );
};
