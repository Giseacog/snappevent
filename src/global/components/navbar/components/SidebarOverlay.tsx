import { motion } from "framer-motion";
import { useNavbar } from "../useNavbar";

export const SidebarOverlay = () => {
  const { setIsOpen } = useNavbar();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-primary-900/40 backdrop-blur-sm z-[60] md:hidden h-dvh"
    />
  );
};
