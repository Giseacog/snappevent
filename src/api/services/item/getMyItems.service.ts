import { supabase } from "config/supabase";
import { PAGE_SIZE } from "global/constants";
import type { Item } from "types/entities/Item";
import type { PaginatedResult, ServiceResult } from "types/responses";

export const getMyItemsService = async (
  page: number
): Promise<ServiceResult<PaginatedResult<Item>>> => {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from("items")
    .select("*", { count: "exact" })
    .is("deactivated_at", null)
    .range(from, to);

  if (error) {
    return {
      success: false,
      message: error.message ?? "Failed to fetch items.",
    };
  }

  const hasNextPage = count !== null ? to + 1 < count : false;

  return {
    success: true,
    data: {
      items: (data ?? []) as Item[],
      page,
      hasNextPage,
    },
  };
};
