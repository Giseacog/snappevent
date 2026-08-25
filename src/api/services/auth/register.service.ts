import type { RegisterFormValues } from "types/formValues";
import type { User } from "@supabase/supabase-js";
import type { ServiceResult } from "types/responses";
import { supabase } from "config/supabase";
import Paths from "routes/paths";

export const registerService = async (
  values: RegisterFormValues
): Promise<ServiceResult<User>> => {
  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      emailRedirectTo: `${import.meta.env.VITE_FRONTEND_URL}${
        Paths.EMAIL_VERIFIED
      }`,
      data: {
        name: values.name,
      },
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  if (!data.user) {
    return {
      success: false,
      message: "User could not be created",
    };
  }

  return {
    success: true,
    data: data.user,
  };
};
