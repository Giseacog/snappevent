import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { RegisterFormValues } from "types/formValues";
import { useRegisterMutation } from "../../mutations/auth/useRegisterMutation";
import Paths from "routes/paths";

export const useRegister = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  const [formValues, setFormValues] = useState<RegisterFormValues>({
    name: "",
    email: "",
    password: "",
  });

  const { mutateAsync, isPending } = useRegisterMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const register = async (e: FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const result = await mutateAsync(formValues);

    if (!result.success) {
      setApiError(result.message ?? "Error registering. Please try again.");
      return;
    }

    navigate(Paths.VERIFY_EMAIL);
  };

  return {
    handleInputChange,
    register,
    loading: isPending,
    apiError,
  };
};
