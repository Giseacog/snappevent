import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";
import Paths from "routes/paths";
import { useBusinessByAdmin } from "api/hooks/businesses";
import { useAuth } from "hooks/useAuth";

export const LogoMenu = () => {
  const { user } = useAuth();
  const { business } = useBusinessByAdmin(user?.id || "");

  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary-500 p-2 rounded-xl shadow-md shadow-primary-200">
        <Ticket className="text-white w-6 h-6 rotate-45" />
      </div>

      <Link
        to={Paths.HOME}
        className="text-xl font-black tracking-tight text-primary-800"
      >
        {business?.name || ""}
      </Link>
    </div>
  );
};
