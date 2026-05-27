import { useMutation } from "@tanstack/react-query";
import type { LoginFormValues } from "types/formValues";
import { loginService } from "api/services/auth/login.service";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (values: LoginFormValues) => loginService(values),
  });
};
