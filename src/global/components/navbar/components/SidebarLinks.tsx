import { Link } from "react-router-dom";
import { useNavbar } from "../useNavbar";
import { MENU_ITEMS } from "global/constants";

export const SidebarLinks = () => {
  const { setIsOpen } = useNavbar();

  return (
    <div className="flex-1 p-4 space-y-2">
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 px-4 py-3 text-primary-800 font-semibold hover:bg-primary-50 rounded-2xl transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
