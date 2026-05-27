import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deactivateItemService } from "api/services/item/deactivateItem.service";
import type { ServiceResult } from "types/responses";
import type { Item } from "types/entities/Item";

export const useDeactivateItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<ServiceResult<Item>, Error, Item["id"]>({
    mutationFn: deactivateItemService,
    onSuccess: (response) => {
      if (response?.success) {
        queryClient.invalidateQueries({ queryKey: ["items"] });
      }
    },
    onError: (error: Error) => {
      console.error("Error deactivating items:", error);
    },
  });
};
