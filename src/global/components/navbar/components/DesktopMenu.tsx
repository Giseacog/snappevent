import { Link } from "react-router-dom";
import { useNavbar } from "../useNavbar";
import { MENU_ITEMS } from "global/constants";
import { TEXTS } from "global/texts";

export const DesktopMenu = () => {
  const { logOut } = useNavbar();

  return (
    <div className="hidden md:flex items-center gap-8">
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-primary-600 hover:text-secondary-600 font-medium transition-colors"
        >
          {item.name}
        </Link>
      ))}

      <button
        onClick={logOut}
        className="text-primary-600 hover:text-secondary-600 font-medium transition-colors cursor-pointer"
      >
        {TEXTS.navbar.closeSession}
      </button>
    </div>
  );
};

