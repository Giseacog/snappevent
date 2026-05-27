import type { User } from "@supabase/supabase-js";
import type { LoginFormValues } from "types/formValues";
import type { ServiceResult } from "types/responses";
import { supabase } from "config/supabase";
import { SYSTEM_ID } from "global/constants";

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

  // 2. Validar el system_id almacenado en los metadatos
  const userSystemId = data.user.user_metadata?.system_id;

  if (userSystemId !== SYSTEM_ID) {
    console.log(
      `User ${data.user.email} attempted to log in with system_id ${userSystemId}, but expected ${SYSTEM_ID}. Logging out.`
    );
    await supabase.auth.signOut();

    return {
      success: false,
      message: "Este usuario no tiene acceso a este sistema.",
    };
  }

  // 3. Si todo está bien, regresamos el usuario
  return {
    success: true,
    data: data.user,
  };
};
