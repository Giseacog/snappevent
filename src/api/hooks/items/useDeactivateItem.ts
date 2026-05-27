import { useContext } from "react";
import { ModalContext } from "context/ModalContext";
import { useDeactivateItemMutation } from "../../mutations/items/useDeactivateItemMutation";
import type { Item } from "types/entities/Item";

export const useDeactivateItem = () => {
  const { closeModal } = useContext(ModalContext);
  const { mutateAsync, isPending, error, isError } =
    useDeactivateItemMutation();

  const handleDeactivate = async (itemId: Item["id"]) => {
    const result = await mutateAsync(itemId);

    if (result.success) {
      closeModal();
    }
  };

  return {
    deactivateItem: handleDeactivate,
    isLoading: isPending,
    apiError: isError ? error.message : undefined,
  };
};
