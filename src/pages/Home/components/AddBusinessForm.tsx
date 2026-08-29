import React from "react";
import {
  Store,
  Tags,
  Globe,
  Facebook,
  Instagram,
  PlusCircle,
  Building2,
} from "lucide-react";
import { Input } from "global/components/forms/Input";
import { Button } from "global/components/forms/Button";
import { useCreateBusiness } from "api/hooks/businesses";
import { useAuth } from "hooks/useAuth";

export const AddBusinessForm = () => {
  const { user } = useAuth();
  const { createBusiness, isCreating } = useCreateBusiness();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (!user?.id) {
      console.error("Error: No hay un administrador autenticado");
      return;
    }

    const newBusiness = {
      adminId: user.id,
      name: formData.get("name") as string,
      category: (formData.get("category") as string) || null,
      socialLinks: {
        website: formData.get("website") as string,
        facebook: formData.get("facebook") as string,
        instagram: formData.get("instagram") as string,
      },
      isActive: true,
    };

    try {
      await createBusiness(newBusiness);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error al crear el negocio:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Encabezado */}
      <div className="mb-8 text-center space-y-3">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 mb-2">
          <Building2 className="w-7 h-7" />
        </div>
        <h2 className="text-3xl font-bold text-primary-900">
          Registrar Negocio
        </h2>
        <p className="text-sm text-primary-600 max-w-sm mx-auto">
          Ingresa los detalles del comercio para darlo de alta en la plataforma.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sección: Información Principal */}
        <div className="space-y-4 bg-primary-50/30 p-6 rounded-2xl border border-primary-50">
          <h3 className="text-xs font-bold text-primary-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Store className="w-4 h-4" />
            Información Principal
          </h3>

          <div className="grid grid-cols-1 gap-5">
            <Input
              label="Nombre del Negocio"
              name="name"
              icon={Store}
              placeholder="Ej. Taquería El Paisa"
              required
            />

            <Input
              label="Categoría"
              name="category"
              icon={Tags}
              placeholder="Ej. Restaurante, Ropa, Servicios..."
              required
            />
          </div>
        </div>

        {/* Sección: Redes Sociales (JSONB) */}
        <div className="space-y-4 bg-primary-50/30 p-6 rounded-2xl border border-primary-50">
          <h3 className="text-xs font-bold text-primary-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Presencia Digital
          </h3>

          <div className="space-y-5">
            <Input
              label="Sitio Web"
              name="website"
              icon={Globe}
              type="url"
              placeholder="https://www.minegocio.com"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                label="Facebook"
                name="facebook"
                icon={Facebook}
                type="url"
                placeholder="https://facebook.com/..."
              />
              <Input
                label="Instagram"
                name="instagram"
                icon={Instagram}
                type="url"
                placeholder="https://instagram.com/..."
              />
            </div>
          </div>
        </div>

        {/* Acciones */}
        <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4">
          <Button
            type="button"
            variant="link"
            color="primary"
            fullWidth={false}
            className="text-primary-500 w-full sm:w-auto"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="solid"
            color="primary"
            isLoading={isCreating}
            fullWidth={false}
            className="w-full sm:w-auto"
          >
            {!isCreating && <PlusCircle className="w-5 h-5" />}
            Guardar Negocio
          </Button>
        </div>
      </form>
    </div>
  );
};
