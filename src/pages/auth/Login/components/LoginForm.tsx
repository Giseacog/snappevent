import { ArrowRight, Mail } from "lucide-react";
import { Input } from "global/components/forms/Input";
import { useLogin } from "api/hooks/auth/useLogin";
import { Button } from "global/components/forms/Button";
import { PasswordInput } from "global/components/forms/PasswordInput";
import { Link } from "react-router-dom";
import Paths from "routes/paths";
import { FormError } from "global/components/forms/FormError";
import { TEXTS } from "global/texts";

export const LoginForm = () => {
  const { handleInputChange, login, loading, apiError } = useLogin();

  return (
    <form onSubmit={login} className="space-y-5">
      <FormError text={apiError} />

      <Input
        label={TEXTS.auth.login.form.email.label}
        name="email"
        icon={Mail}
        type="email"
        placeholder={TEXTS.auth.login.form.email.placeholder}
        required
        onChange={handleInputChange}
      />

      <div>
        <PasswordInput onChange={handleInputChange} />

        <div className="flex justify-end mt-2">
          <Link
            to={Paths.FORGOT_PASSWORD}
            className="text-sm text-primary-500 hover:text-primary-700 hover:underline transition-colors"
          >
            {TEXTS.auth.login.form.forgotPassword}
          </Link>
        </div>
      </div>

      <Button type="submit" isLoading={loading}>
        {TEXTS.auth.login.form.submitButton}
        <ArrowRight className="w-5 h-5" />
      </Button>
    </form>
  );
};
