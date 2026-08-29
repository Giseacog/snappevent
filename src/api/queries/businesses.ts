import { useQuery } from "@tanstack/react-query";
import {
  getBusinessesService,
  getBusinessByIdService,
  getBusinessByAdminIdService,
} from "../services/businesses";

export const useBusinessesQuery = () => {
  return useQuery({
    queryKey: ["businesses"],
    queryFn: getBusinessesService,
  });
};

export const useBusinessByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["businesses", id],
    queryFn: () => getBusinessByIdService(id),
    enabled: !!id,
  });
};

export const useBusinessByAdminIdQuery = (adminId: string) => {
  return useQuery({
    queryKey: ["businesses", "admin", adminId],
    queryFn: () => getBusinessByAdminIdService(adminId),
    enabled: !!adminId,
    retry: false,
  });
};
