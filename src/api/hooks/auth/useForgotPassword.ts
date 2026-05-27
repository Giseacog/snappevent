import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "api/mutations/auth/useForgotPasswordMultation";
import Paths from "routes/paths";

export const useForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [apiError, setApiError] = useState<string>();

  const { mutateAsync, isPending } = useForgotPasswordMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    setApiError(undefined);

    const result = await mutateAsync(email);

    if (!result.success) {
      setApiError(
        result.message ?? "Failed to send reset email. Please try again."
      );
      return;
    }

    navigate(Paths.CHECK_EMAIL_FOR_PASSWORD_RESET);
  };

  return {
    handleInputChange,
    sendEmail,
    loading: isPending,
    apiError,
  };
};
