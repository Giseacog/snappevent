import type { User } from "@supabase/supabase-js";

export interface Item {
  id: string;
  userId: User["id"];
  name: string;
  createdAt: string;
  deactivatedAt: string | null;
}

export interface DBItem {
  id: string;
  user_id: User["id"];
  name: string;
  created_at: string;
  deactivated_at: string | null;
}
