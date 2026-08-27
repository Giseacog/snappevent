import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBranchService, updateBranchService, deleteBranchService } from "../services/branches";
import { Branch } from "../mappers/branches";

export const useCreateBranchMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (branch: Omit<Branch, "id" | "createdAt">) => createBranchService(branch),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["branches"] });
    },
  });
};

export const useUpdateBranchMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, branch }: { id: string; branch: Partial<Branch> }) => updateBranchService(id, branch),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["branches"] });
      queryClient.invalidateQueries({ queryKey: ["branches", variables.id] });
    },
  });
};

export const useDeleteBranchMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteBranchService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["branches"] });
    },
  });
};
