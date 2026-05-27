import { AnimatePresence } from "framer-motion";
import { SidebarOverlay } from "./SidebarOverlay";
import { SidebarDrawer } from "./SidebarDrawer";

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileSidebar = ({ isOpen, setIsOpen }: MobileSidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <SidebarOverlay />
          <SidebarDrawer setIsOpen={setIsOpen} />
        </>
      )}
    </AnimatePresence>
  );
};
