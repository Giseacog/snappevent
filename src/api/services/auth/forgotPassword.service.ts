import { supabase } from "config/supabase";
import Paths from "routes/paths";
import type { ServiceResult } from "types/responses";

export const forgotPasswordService = async (
  email: string
): Promise<ServiceResult<null>> => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${import.meta.env.VITE_FRONTEND_URL}${Paths.RESET_PASSWORD}`,
  });

  if (error) {
    return {
      success: false,
      message:
        error.status === 429
          ? "Too many attempts. Please try again later."
          : error.message,
    };
  }

  return {
    success: true,
    data: null,
  };
};
