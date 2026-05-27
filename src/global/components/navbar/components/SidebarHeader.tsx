import { X } from "lucide-react";
import { TEXTS } from "global/texts";

interface SidebarHeaderProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarHeader = ({ setIsOpen }: SidebarHeaderProps) => {
  return (
    <div className="p-6 flex justify-between items-center border-b border-primary-50 h-20">
      <span className="font-bold text-primary-900">{TEXTS.navbar.menu}</span>
      <button onClick={() => setIsOpen(false)} className="p-2 text-primary-400">
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};
