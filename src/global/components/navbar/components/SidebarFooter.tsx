import { LogOut } from "lucide-react";
import { useNavbar } from "../useNavbar";
import { useAuth } from "hooks/useAuth";
import { TEXTS } from "global/texts";

export const SidebarFooter = () => {
  const { user } = useAuth();
  const { logOut } = useNavbar();

  return (
    <div className="p-6 bg-primary-50 border-t border-primary-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>
        <div>
          <p className="text-sm font-bold text-primary-900">{user?.name}</p>
        </div>
      </div>

      <button
        onClick={logOut}
        className="w-full flex items-center justify-center gap-2 bg-white text-danger-500 border border-danger-100 py-3 rounded-2xl font-bold hover:bg-danger-50 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        {TEXTS.navbar.logOut}
      </button>
    </div>
  );
};
