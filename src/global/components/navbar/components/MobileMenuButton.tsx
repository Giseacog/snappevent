import { Menu } from "lucide-react";

interface MobileMenuButtonProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileMenuButton = ({ setIsOpen }: MobileMenuButtonProps) => {
  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => setIsOpen(true)} className="text-primary-600 p-2">
        <Menu className="w-7 h-7" />
      </button>
    </div>
  );
};
