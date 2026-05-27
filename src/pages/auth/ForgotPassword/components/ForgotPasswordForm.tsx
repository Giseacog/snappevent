import { ArrowRight, Mail } from "lucide-react";
import { Button } from "global/components/forms/Button";
import { Input } from "global/components/forms/Input";
import { FormError } from "global/components/forms/FormError";
import { useForgotPassword } from "api/hooks/auth/useForgotPassword";
import { TEXTS } from "global/texts";

export const ForgotPasswordForm = () => {
  const { sendEmail, handleInputChange, loading, apiError } =
    useForgotPassword();

  return (
    <form onSubmit={sendEmail} className="space-y-5">
      <Input
        label={TEXTS.auth.forgotPassword.form.email.label}
        name="email"
        icon={Mail}
        type="email"
        placeholder={TEXTS.auth.forgotPassword.form.email.placeholder}
        required
        onChange={handleInputChange}
      />

      {apiError && <FormError text={apiError} />}

      <Button type="submit" isLoading={loading} className="w-full">
        {TEXTS.auth.forgotPassword.form.submitButton}
        <ArrowRight className="w-5 h-5" />
      </Button>
    </form>
  );
};
