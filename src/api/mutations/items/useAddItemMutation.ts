import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemService } from "api/services/item/addItem.service";
import type { AddItemFormValues } from "types/formValues";
import type { ServiceResult } from "types/responses";
import type { Item } from "types/entities/Item";

export const useAddItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<ServiceResult<Item>, Error, AddItemFormValues>({
    mutationFn: (values: AddItemFormValues) =>
      addItemService(values),
    onSuccess: (response) => {
      if (response.success) {
        queryClient.invalidateQueries({ queryKey: ["items"] });
      }
    },
    onError: (error) => {
      console.error("Error adding items:", error);
    },
  });
};
