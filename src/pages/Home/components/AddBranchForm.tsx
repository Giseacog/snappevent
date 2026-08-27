import { useState } from "react";

interface AddBranchFormProps {
  onClose: () => void;
  onSaved: () => void;
}

export const AddBranchForm = ({ onClose, onSaved }: AddBranchFormProps) => {
  // Estado inicial basado en tu esquema SQL
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    is_active: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // AQUÍ VA TU LLAMADA A LA API
      // Ejemplo:
      // await createBranch({
      //   ...formData,
      //   business_id: user.business_id // Asegúrate de incluir el business_id
      // });

      console.log("Datos a enviar:", formData);

      // Si todo sale bien:
      if (onSaved) onSaved(); // Para recargar la lista de sucursales
      if (onClose) onClose(); // Para cerrar el modal
    } catch (error) {
      console.error("Error al crear la sucursal:", error);
      alert("Hubo un error al guardar la sucursal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Nombre (Requerido) */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nombre de la Sucursal *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Ej. Sucursal Centro"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Dirección */}
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Dirección
        </label>
        <textarea
          id="address"
          name="address"
          rows="2"
          value={formData.address}
          onChange={handleChange}
          placeholder="Calle, Número, Colonia..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Teléfono */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Ej. 555 123 4567"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Activo (Toggle / Checkbox) */}
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="is_active"
          name="is_active"
          checked={formData.is_active}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
        />
        <label
          htmlFor="is_active"
          className="ml-2 block text-sm text-gray-700 cursor-pointer"
        >
          Sucursal activa (visible para reservaciones)
        </label>
      </div>

      {/* Botones de Acción */}
      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          {isSubmitting ? "Guardando..." : "Guardar Sucursal"}
        </button>
      </div>
    </form>
  );
};
