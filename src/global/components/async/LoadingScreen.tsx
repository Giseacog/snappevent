import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { TEXTS } from "global/texts";

export const LoadingScreen = () => {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary/10 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "reverse",
        }}
      >
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </motion.div>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-primary font-medium"
      >
        {TEXTS.general.loading}
      </motion.p>
    </motion.div>
  );
};

