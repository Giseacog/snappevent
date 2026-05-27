import { spring } from "framer-motion";

export const notificationAnimation = {
  initial: { opacity: 0, y: -20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
  transtion: { duration: 0.3 },
};

export const itemCardAnimation = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: spring,
      stiffness: 260,
      damping: 20,
    },
  },
  layout: true,
};

export const containerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0 },
};
