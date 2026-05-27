import { useMutation } from "@tanstack/react-query";
import type { RegisterFormValues } from "types/formValues";
import { registerService } from "api/services/auth/register.service";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (values: RegisterFormValues) => registerService(values),
  });
};
