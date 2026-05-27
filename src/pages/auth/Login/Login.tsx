import { Building2 } from "lucide-react";
import { LoginForm } from "./components/LoginForm";
import { Link } from "react-router-dom";
import Paths from "routes/paths";
import { AuthLayout } from "layouts/AuthLayout";
import { TEXTS } from "global/texts";

export const Login = () => {
  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <div className="bg-primary-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-200">
          <Building2 className="text-white w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-primary-900">{TEXTS.auth.login.title}</h1>
        <p className="text-primary-600 mt-2">
          {TEXTS.auth.login.description}
        </p>
      </div>

      <LoginForm />

      <p className="text-center text-primary-500 mt-8 text-sm">
        {TEXTS.auth.login.noAccount}{" "}
        <Link
          to={Paths.REGISTER}
          className="text-secondary-600 font-bold hover:underline"
        >
          {TEXTS.auth.login.signUp}
        </Link>
      </p>
    </AuthLayout>
  );
};
