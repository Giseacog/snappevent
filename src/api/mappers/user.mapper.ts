import type { User } from "@supabase/supabase-js";
import type { LocalUser } from "types/entities/User";

export const mapUserFromDB = (user: User): LocalUser => {
  return {
    email: user.email || "",
    id: user.id,
    name: user.user_metadata?.name || "",
  };
};
