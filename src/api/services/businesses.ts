import { supabase } from "config/supabase";
import {
  mapBusinessToClient,
  mapBusinessToServer,
  type Business,
  type BusinessDTO,
} from "../mappers/businesses";

export const getBusinessesService = async (): Promise<Business[]> => {
  const { data, error } = await supabase.from("businesses").select("*");
  if (error) throw new Error(error.message);
  return (data as BusinessDTO[]).map(mapBusinessToClient);
};

export const getBusinessByIdService = async (id: string): Promise<Business> => {
  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return mapBusinessToClient(data as BusinessDTO);
};

export const getBusinessByAdminIdService = async (
  adminId: string,
): Promise<Business> => {
  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("admin_id", adminId)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return mapBusinessToClient(data as BusinessDTO);
};

export const createBusinessService = async (
  business: Omit<Business, "id" | "createdAt">,
): Promise<Business> => {
  const dto = mapBusinessToServer(business);
  const { data, error } = await supabase
    .from("businesses")
    .insert(dto)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mapBusinessToClient(data as BusinessDTO);
};

export const updateBusinessService = async (
  id: string,
  business: Partial<Business>,
): Promise<Business> => {
  const dto = mapBusinessToServer(business);
  const { data, error } = await supabase
    .from("businesses")
    .update(dto)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mapBusinessToClient(data as BusinessDTO);
};

export const deleteBusinessService = async (id: string): Promise<void> => {
  const { error } = await supabase.from("businesses").delete().eq("id", id);
  if (error) throw new Error(error.message);
};
