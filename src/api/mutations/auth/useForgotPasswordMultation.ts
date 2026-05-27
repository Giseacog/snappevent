import { useMutation } from "@tanstack/react-query";
import { forgotPasswordService } from "api/services/auth/forgotPassword.service";

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: (email: string) => forgotPasswordService(email),
  });
};
