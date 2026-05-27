import { motion, AnimatePresence } from "framer-motion";
import { notificationAnimation } from "global/motion/motion";

interface FormErrorProps {
  text?: string | null;
}

export const FormError = ({ text }: FormErrorProps) => {
  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {text && (
          <motion.p
            key={text}
            {...notificationAnimation}
            className="text-sm text-danger-600 bg-danger-50 py-3 px-4 rounded-xl"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
