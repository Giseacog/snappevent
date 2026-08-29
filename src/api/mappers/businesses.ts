export interface BusinessDTO {
  id: string;
  admin_id: string;
  name: string;
  category: string | null;
  social_links: any;
  is_active: boolean;
  created_at: string;
}

export interface Business {
  id: string;
  adminId: string;
  name: string;
  category: string | null;
  socialLinks: any;
  isActive: boolean;
  createdAt: string;
}

export const mapBusinessToClient = (dto: BusinessDTO): Business => ({
  id: dto.id,
  adminId: dto.admin_id,
  name: dto.name,
  category: dto.category,
  socialLinks: dto.social_links,
  isActive: dto.is_active,
  createdAt: dto.created_at,
});

export const mapBusinessToServer = (client: Partial<Business>): Partial<BusinessDTO> => {
  const serverObj: Partial<BusinessDTO> = {};
  if (client.id !== undefined) serverObj.id = client.id;
  if (client.adminId !== undefined) serverObj.admin_id = client.adminId;
  if (client.name !== undefined) serverObj.name = client.name;
  if (client.category !== undefined) serverObj.category = client.category;
  if (client.socialLinks !== undefined) serverObj.social_links = client.socialLinks;
  if (client.isActive !== undefined) serverObj.is_active = client.isActive;
  if (client.createdAt !== undefined) serverObj.created_at = client.createdAt;
  return serverObj;
};
