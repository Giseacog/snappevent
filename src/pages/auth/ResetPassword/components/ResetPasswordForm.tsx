import { Button } from "global/components/forms/Button";
import { FormError } from "global/components/forms/FormError";
import { PasswordInput } from "global/components/forms/PasswordInput";
import { TEXTS } from "global/texts";

interface ResetPasswordFormProps {
  setPassword: (password: string) => void;
  setConfirm: (confirm: string) => void;
  handleReset: (e: React.FormEvent) => void;
  error: string | null;
  loading: boolean;
}

export const ResetPasswordForm = ({
  setConfirm,
  setPassword,
  handleReset,
  error,
  loading,
}: ResetPasswordFormProps) => {
  return (
    <form onSubmit={handleReset} className="space-y-4">
      <PasswordInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        label={TEXTS.auth.resetPassword.form.newPasswordLabel}
      />

      <PasswordInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setConfirm(e.target.value)
        }
        label={TEXTS.auth.resetPassword.form.confirmPasswordLabel}
      />

      {error && <FormError text={error} />}

      <Button type="submit" disabled={loading} isLoading={loading}>
        {TEXTS.auth.resetPassword.form.submitButton}
      </Button>
    </form>
  );
};
