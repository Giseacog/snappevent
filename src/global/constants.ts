import Paths from "routes/paths";
import { TEXTS } from "global/texts";

export const PAGE_SIZE = 10;

export const MENU_ITEMS = [{ name: TEXTS.navbar.menuItems.home, path: Paths.HOME }];

export const SYSTEM_ID = import.meta.env.VITE_SYSTEM_ID;