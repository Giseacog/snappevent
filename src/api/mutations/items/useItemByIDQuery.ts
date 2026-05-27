import { useQuery } from "@tanstack/react-query";
import { getItemByIdService } from "api/services/item/getItemById.service";
import { mapItemFromDB } from "api/mappers/item.mapper";
import type { Item } from "types/entities/Item";

export const useItemByIdQuery = (itemId?: Item["id"]) => {
  return useQuery({
    queryKey: ["items", itemId],
    queryFn: async () => {
      if (!itemId) throw new Error("Item ID is required");

      const response = await getItemByIdService(itemId);

      if (!response.success || !response.data) {
        throw new Error(response.message || "Failed to fetch item");
      }

      return response.data;
    },

    select: (data) => mapItemFromDB(data),
    enabled: !!itemId,
    staleTime: 1000 * 60 * 5,
  });
};
