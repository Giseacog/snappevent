import { supabase } from "config/supabase";
import type { Item } from "types/entities/Item";
import type { UpdateItemFormValues } from "types/formValues";
import type { ServiceResult } from "types/responses";

export const updateItemService = async (
  params: UpdateItemFormValues
): Promise<ServiceResult<Item>> => {
  const { data, error } = await supabase
    .from("items")
    .update({
      name: params.name,
    })
    .eq("id", params.id)
    .select()
    .single();

  if (error) {
    return {
      success: false,
      message: error.message ?? "Failed to update item.",
    };
  }

  return {
    success: true,
    data: (await data) as Item,
  };
};
