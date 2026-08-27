export interface BranchDTO {
  id: string;
  business_id: string;
  name: string;
  address: string | null;
  phone: string | null;
  operating_hours: any;
  is_active: boolean;
  created_at: string;
}

export interface Branch {
  id: string;
  businessId: string;
  name: string;
  address: string | null;
  phone: string | null;
  operatingHours: any;
  isActive: boolean;
  createdAt: string;
}

export const mapBranchToClient = (dto: BranchDTO): Branch => ({
  id: dto.id,
  businessId: dto.business_id,
  name: dto.name,
  address: dto.address,
  phone: dto.phone,
  operatingHours: dto.operating_hours,
  isActive: dto.is_active,
  createdAt: dto.created_at,
});

export const mapBranchToServer = (client: Partial<Branch>): Partial<BranchDTO> => {
  const serverObj: Partial<BranchDTO> = {};
  if (client.id !== undefined) serverObj.id = client.id;
  if (client.businessId !== undefined) serverObj.business_id = client.businessId;
  if (client.name !== undefined) serverObj.name = client.name;
  if (client.address !== undefined) serverObj.address = client.address;
  if (client.phone !== undefined) serverObj.phone = client.phone;
  if (client.operatingHours !== undefined) serverObj.operating_hours = client.operatingHours;
  if (client.isActive !== undefined) serverObj.is_active = client.isActive;
  if (client.createdAt !== undefined) serverObj.created_at = client.createdAt;
  return serverObj;
};
