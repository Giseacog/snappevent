import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createBusinessService,
  updateBusinessService,
  deleteBusinessService,
} from "../services/businesses";
import type { Business } from "api/mappers/businesses";

export const useCreateBusinessMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (business: Omit<Business, "id" | "createdAt">) =>
      createBusinessService(business),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["businesses"] });
    },
  });
};

export const useUpdateBusinessMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, business }: { id: string; business: Partial<Business> }) =>
      updateBusinessService(id, business),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["businesses"] });
      queryClient.invalidateQueries({ queryKey: ["businesses", variables.id] });
    },
  });
};

export const useDeleteBusinessMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteBusinessService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["businesses"] });
    },
  });
};
