import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAuth } from "hooks/useAuth";
import { useCreateBranch } from "api/hooks/branches";
import { useBusinessByAdmin } from "api/hooks/businesses";

export const useAddBranchForm = (onSuccess?: () => void) => {
  const { user } = useAuth();
  const { business } = useBusinessByAdmin(user?.id || "");
  const { createBranch } = useCreateBranch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    is_active: true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!business) {
      setError("No se encontró el negocio para este administrador.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await createBranch({
        businessId: business.id,
        name: formData.name,
        address: formData.address || null,
        phone: formData.phone || null,
        isActive: formData.is_active,
        operatingHours: {},
      });

      onSuccess?.();
    } catch (err: any) {
      setError(err.message || "Error al crear la sucursal");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    error,
  };
};
