import { supabase } from "config/supabase";
import type { Item } from "types/entities/Item";
import type { ServiceResult } from "types/responses";

export const deactivateItemService = async (
  itemsId: Item["id"]
): Promise<ServiceResult<Item>> => {
  const { data, error } = await supabase
    .from("items")
    .update({ deactivated_at: new Date() })
    .eq("id", itemsId)
    .select()
    .single();

  if (error) {
    return {
      success: false,
      message: error.message ?? "Failed to deactivate item.",
    };
  }

  return {
    success: true,
    data: data as Item,
  };
};
