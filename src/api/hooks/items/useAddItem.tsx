import { useAddItemMutation } from "api/mutations/items/useAddItemMutation";
import { useState } from "react";
import type { AddItemFormValues } from "types/formValues";
import { TEXTS } from "global/texts";

export const useAddItem = () => {
  const [formValues, setFormValues] = useState<AddItemFormValues>({
    name: "",
  });
  const [apiError, setApiError] = useState<string | null>(null);

  const { mutateAsync, isPending } = useAddItemMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError(null);

    const result = await mutateAsync(formValues);

    if (!result.success) {
      setApiError(result.message ?? TEXTS.general.errorAddingItem);
      return;
    }

    setFormValues({ name: "" });
  };

  return {
    formValues,
    handleInputChange,
    addItem: handleSubmit,
    loading: isPending,
    apiError,
  };
};
