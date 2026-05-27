import { useState, type FormEvent } from "react";
import type { LoginFormValues } from "types/formValues";
import { useNavigate } from "react-router-dom";
import Paths from "routes/paths";
import { useLoginMutation } from "../../mutations/auth/useLoginMutation";

export const useLogin = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const { mutateAsync, isPending } = useLoginMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const result = await mutateAsync(formValues);

    if (!result.success) {
      setApiError(result.message ?? "Error logging in. Please try again.");

      setTimeout(() => {
        setApiError(null);
      }, 2000);
      return;
    }

    navigate(Paths.HOME);
  };

  return { handleInputChange, login, loading: isPending, apiError };
};
