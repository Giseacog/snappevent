import { useState } from "react";
import type { UpdateItemFormValues } from "types/formValues";
import { useUpdateItemMutation } from "../../mutations/items/useUpdateItemMutation";

export const useUpdateItem = (initialValues?: UpdateItemFormValues) => {
  const [formValues, setFormValues] = useState<UpdateItemFormValues>(
    initialValues ?? { name: "", id: "" }
  );
  const [apiError, setApiError] = useState<string | null>(null);

  const { mutateAsync, isPending, isSuccess } = useUpdateItemMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const result = await mutateAsync(formValues);

    if (!result.success) {
      setApiError(result.message ?? "Error updating item");
    }
  };

  return {
    formValues,
    setFormValues,
    handleInputChange,
    updateItem: handleUpdate,
    isLoading: isPending,
    isSuccess,
    apiError,
  };
};
