import type { DBItem, Item } from "types/entities/Item";

export const mapItemFromDB = (data: DBItem): Item => {
  return {
    id: data.id,
    userId: data.user_id,
    name: data.name,
    createdAt: data.created_at,
    deactivatedAt: data.deactivated_at,
  };
};
