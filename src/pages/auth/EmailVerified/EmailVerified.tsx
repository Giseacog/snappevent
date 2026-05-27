import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "global/components/forms/Button";
import Paths from "routes/paths";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "layouts/AuthLayout";
import { TEXTS } from "global/texts";
import { useHashTokenValidation } from "hooks/useHashTokenValidation";
import { useEffect } from "react";
import { supabase } from "config/supabase";

export const EmailVerified = () => {
  const navigate = useNavigate();
  const status = useHashTokenValidation();

  useEffect(() => {
    return () => {
      supabase.auth.signOut();
    };
  }, []);

  return (
    <AuthLayout>
      {status === "verifying" && (
        <div className="flex flex-col items-center text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary-500 mb-4" />
          <h1 className="text-2xl font-bold text-primary-900">
            {TEXTS.auth.emailVerified.verifying.title}
          </h1>
          <p className="mt-2 text-primary-600">
            {TEXTS.auth.emailVerified.verifying.subtitle}
          </p>
        </div>
      )}

      {status === "valid" && (
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-500 shadow-lg shadow-primary-200">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-primary-900">
            {TEXTS.auth.emailVerified.success.title}
          </h1>

          <p className="mt-2 text-primary-600">
            {TEXTS.auth.emailVerified.success.subtitle}
          </p>

          <div className="mt-8">
            <Button
              type="button"
              onClick={() => navigate(Paths.LOGIN)}
              className="w-full"
            >
              {TEXTS.auth.emailVerified.success.goToLogin}
            </Button>
          </div>
        </div>
      )}

      {status === "invalid" && (
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-danger-500 shadow-lg shadow-danger-200">
            <XCircle className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-danger-900">
            {TEXTS.auth.emailVerified.error.title}
          </h1>

          <p className="mt-2 text-danger-600">
            {TEXTS.auth.emailVerified.error.description}
          </p>

          <div className="mt-8">
            <Button
              type="button"
              variant="link"
              onClick={() => navigate(Paths.LOGIN)}
              className="w-full"
            >
              {TEXTS.auth.emailVerified.error.goToLogin}
            </Button>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};
