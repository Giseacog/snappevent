import { useBranchesQuery, useBranchByIdQuery } from "../queries/branches";
import { useCreateBranchMutation, useUpdateBranchMutation, useDeleteBranchMutation } from "../mutations/branches";

export const useBranches = () => {
  const { data: branches, isLoading, error } = useBranchesQuery();
  return { branches, isLoading, error };
};

export const useBranch = (id: string) => {
  const { data: branch, isLoading, error } = useBranchByIdQuery(id);
  return { branch, isLoading, error };
};

export const useCreateBranch = () => {
  const { mutateAsync: createBranch, isPending } = useCreateBranchMutation();
  return { createBranch, isCreating: isPending };
};

export const useUpdateBranch = () => {
  const { mutateAsync: updateBranch, isPending } = useUpdateBranchMutation();
  return { updateBranch, isUpdating: isPending };
};

export const useDeleteBranch = () => {
  const { mutateAsync: deleteBranch, isPending } = useDeleteBranchMutation();
  return { deleteBranch, isDeleting: isPending };
};
