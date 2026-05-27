import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateItemService } from "api/services/item/updateItem.service";
import type { UpdateItemFormValues } from "types/formValues";
import type { ServiceResult } from "types/responses";
import type { Item } from "types/entities/Item";

export const useUpdateItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<ServiceResult<Item>, Error, UpdateItemFormValues>({
    mutationFn: updateItemService,
    onSuccess: (response) => {
      if (response?.success) {
        queryClient.invalidateQueries({ queryKey: ["items"] });
      }
    },
    onError: (error) => {
      console.error("Error updating items:", error.message);
    },
  });
};
