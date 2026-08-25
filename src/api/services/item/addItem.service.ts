import { supabase } from "config/supabase";
import type { Item } from "types/entities/Item";
import type { AddItemFormValues } from "types/formValues";
import type { ServiceResult } from "types/responses";

export const addItemService = async (
  values: AddItemFormValues,
): Promise<ServiceResult<Item>> => {
  const { data, error } = await supabase
    .from("items")
    .insert({
      name: values.name,        
    })
    .select()
    .single();

  if (error) {
    return {
      success: false,
      message: error.message ?? "Failed to create item.",
    };
  }

  return {
    success: true,
    data: data as Item,
  };
};
