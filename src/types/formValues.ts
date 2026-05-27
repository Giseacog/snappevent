import type { Item } from "./entities/Item";

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface AddItemFormValues {
  name: string;
}

export interface UpdateItemFormValues {
  id: Item["id"];
  name: string;
}
