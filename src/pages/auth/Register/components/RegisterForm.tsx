import { ArrowRight, Mail, User } from "lucide-react";
import { Input } from "global/components/forms/Input";
import { Button } from "global/components/forms/Button";
import { PasswordInput } from "global/components/forms/PasswordInput";
import { FormError } from "global/components/forms/FormError";
import { useRegister } from "api/hooks/auth/useRegister";
import { TEXTS } from "global/texts";

export const RegisterForm = () => {
  const { handleInputChange, register, loading, apiError } = useRegister();

  return (
    <form onSubmit={register} className="space-y-5">
      <FormError text={apiError} />

      <Input
        label={TEXTS.auth.register.form.fullName.label}
        name="name"
        icon={User}
        type="text"
        placeholder={TEXTS.auth.register.form.fullName.placeholder}
        required
        onChange={handleInputChange}
      />

      <Input
        label={TEXTS.auth.register.form.email.label}
        name="email"
        icon={Mail}
        type="email"
        placeholder={TEXTS.auth.register.form.email.placeholder}
        required
        onChange={handleInputChange}
      />

      <PasswordInput onChange={handleInputChange} />

      <Button type="submit" isLoading={loading}>
        {TEXTS.auth.register.form.submitButton}
        <ArrowRight className="w-5 h-5" />
      </Button>
    </form>
  );
};
