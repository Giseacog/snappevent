import { User } from "lucide-react";
import { TEXTS } from "global/texts";
import { Input } from "global/components/forms/Input";
import { Button } from "global/components/forms/Button";
import { useAddItem } from "api/hooks/items/useAddItem";
import { FormError } from "global/components/forms/FormError";

export const AddItemForm = () => {
  const { handleInputChange, addItem, loading, apiError, formValues } =
    useAddItem();

  return (
    <form className="space-y-6" onSubmit={addItem}>
      <FormError text={apiError} />

      <Input
        label={TEXTS.home.addItem.form.fields.name.label}
        name="name"
        icon={User}
        placeholder={TEXTS.home.addItem.form.fields.name.placeholder}
        required
        onChange={handleInputChange}
        value={formValues.name}
      />

      <hr className="border-primary-50" />

      <Button type="submit" isLoading={loading}>
        {TEXTS.home.addItem.form.button}
      </Button>
    </form>
  );
};
