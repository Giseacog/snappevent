import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";
import Paths from "routes/paths";
import { AuthLayout } from "layouts/AuthLayout";
import { TEXTS } from "global/texts";

export const Register = () => {
  return (
    <AuthLayout>
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-500 shadow-lg shadow-primary-200">
          <Sparkles className="h-8 w-8 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-primary-900">{TEXTS.auth.register.title}</h1>

        <p className="mt-2 text-primary-600">
          {TEXTS.auth.register.description}
        </p>
      </div>

      <RegisterForm />

      <p className="mt-8 text-center text-sm text-primary-500">
        {TEXTS.auth.register.alreadyHaveAccount}{" "}
        <Link
          to={Paths.LOGIN}
          className="font-semibold text-secondary-600 hover:underline"
        >
          {TEXTS.auth.register.signIn}
        </Link>
      </p>
    </AuthLayout>
  );
};
