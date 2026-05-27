import { motion } from "framer-motion";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarLinks } from "./SidebarLinks";
import { SidebarFooter } from "./SidebarFooter";

interface SidebarDrawerProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarDrawer = ({ setIsOpen }: SidebarDrawerProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed right-0 top-0 h-dvh w-[280px] bg-white z-[70] shadow-2xl md:hidden flex flex-col"
    >
      <SidebarHeader setIsOpen={setIsOpen} />
      <SidebarLinks />
      <SidebarFooter />
    </motion.div>
  );
};
