import { supabase } from "config/supabase";
import type { DBItem } from "types/entities/Item";
import type { ServiceResult } from "types/responses";

export const getItemByIdService = async (
  itemsId: DBItem["id"]
): Promise<ServiceResult<DBItem>> => {
  const { data, error } = await supabase
    .from("items")
    .select()
    .eq("id", itemsId)
    .single();

  if (error) {
    return {
      success: false,
      message: error.message ?? "Failed to fetch item.",
    };
  }

  return {
    success: true,
    data: data as DBItem,
  };
};
