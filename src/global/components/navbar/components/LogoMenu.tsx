import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";
import Paths from "routes/paths";
import { TEXTS } from "global/texts";

export const LogoMenu = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary-500 p-2 rounded-xl shadow-md shadow-primary-200">
        <Ticket className="text-white w-6 h-6 rotate-45" />
      </div>

      <Link
        to={Paths.HOME}
        className="text-xl font-black tracking-tight text-primary-800"
      >
        {TEXTS.navbar.logo.prefix}<span className="text-secondary-500">{TEXTS.navbar.logo.highlight}</span>
      </Link>
    </div>
  );
};
