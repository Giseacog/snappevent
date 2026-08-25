import type { User } from "@supabase/supabase-js";
import type { LoginFormValues } from "types/formValues";
import type { ServiceResult } from "types/responses";
import { supabase } from "config/supabase";

export const loginService = async (
  values: LoginFormValues
): Promise<ServiceResult<User>> => {
  // 1. Intentar el login normal
  const { data, error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (error) return { success: false, message: error.message };

  if (!data.user) {
    return { success: false, message: "User could not be authenticated" };
  }

  // 3. Si todo está bien, regresamos el usuario
  return {
    success: true,
    data: data.user,
  };
};
