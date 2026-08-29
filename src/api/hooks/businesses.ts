import { useBusinessesQuery, useBusinessByIdQuery, useBusinessByAdminIdQuery } from "../queries/businesses";
import { useCreateBusinessMutation, useUpdateBusinessMutation, useDeleteBusinessMutation } from "../mutations/businesses";

export const useBusinesses = () => {
  const { data: businesses, isLoading, error } = useBusinessesQuery();
  return { businesses, isLoading, error };
};

export const useBusiness = (id: string) => {
  const { data: business, isLoading, error } = useBusinessByIdQuery(id);
  return { business, isLoading, error };
};

export const useBusinessByAdmin = (adminId: string) => {
  const { data: business, isLoading, error } = useBusinessByAdminIdQuery(adminId);
  return { business, isLoading, error };
};

export const useCreateBusiness = () => {
  const { mutateAsync: createBusiness, isPending } = useCreateBusinessMutation();
  return { createBusiness, isCreating: isPending };
};

export const useUpdateBusiness = () => {
  const { mutateAsync: updateBusiness, isPending } = useUpdateBusinessMutation();
  return { updateBusiness, isUpdating: isPending };
};

export const useDeleteBusiness = () => {
  const { mutateAsync: deleteBusiness, isPending } = useDeleteBusinessMutation();
  return { deleteBusiness, isDeleting: isPending };
};

