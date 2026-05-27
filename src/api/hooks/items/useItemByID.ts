import { useItemByIdQuery } from "api/mutations/items/useItemByIDQuery";
import type { Item } from "types/entities/Item";

export const useItemById = (itemId?: Item["id"]) => {
  const { data, isPending, isError, error } = useItemByIdQuery(itemId);

  return {
    item: data,
    isLoading: isPending,
    isError,
    apiError: error instanceof Error ? error.message : undefined,
  };
};
