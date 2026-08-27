import { useQuery } from "@tanstack/react-query";
import { getBranchesService, getBranchByIdService } from "../services/branches";

export const useBranchesQuery = () => {
  return useQuery({
    queryKey: ["branches"],
    queryFn: getBranchesService,
  });
};

export const useBranchByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["branches", id],
    queryFn: () => getBranchByIdService(id),
    enabled: !!id,
  });
};
