import { supabase } from "config/supabase";
import { Branch, BranchDTO, mapBranchToClient, mapBranchToServer } from "../mappers/branches";

export const getBranchesService = async (): Promise<Branch[]> => {
  const { data, error } = await supabase.from("branches").select("*");
  if (error) throw new Error(error.message);
  return (data as BranchDTO[]).map(mapBranchToClient);
};

export const getBranchByIdService = async (id: string): Promise<Branch> => {
  const { data, error } = await supabase.from("branches").select("*").eq("id", id).single();
  if (error) throw new Error(error.message);
  return mapBranchToClient(data as BranchDTO);
};

export const createBranchService = async (branch: Omit<Branch, "id" | "createdAt">): Promise<Branch> => {
  const dto = mapBranchToServer(branch);
  const { data, error } = await supabase.from("branches").insert(dto).select().single();
  if (error) throw new Error(error.message);
  return mapBranchToClient(data as BranchDTO);
};

export const updateBranchService = async (id: string, branch: Partial<Branch>): Promise<Branch> => {
  const dto = mapBranchToServer(branch);
  const { data, error } = await supabase.from("branches").update(dto).eq("id", id).select().single();
  if (error) throw new Error(error.message);
  return mapBranchToClient(data as BranchDTO);
};

export const deleteBranchService = async (id: string): Promise<void> => {
  const { error } = await supabase.from("branches").delete().eq("id", id);
  if (error) throw new Error(error.message);
};
