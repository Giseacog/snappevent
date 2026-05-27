import { useContext, useEffect } from "react";
import { ModalContext } from "context/ModalContext";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Modal = () => {
  const { modalContent, isModalOpen, closeModal } = useContext(ModalContext);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-primary-100 flex flex-col"
            style={{ maxHeight: "90dvh" }} // Forzamos la altura máxima aquí
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-primary-400 hover:text-primary-700 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto w-full p-6 pt-12 custom-scrollbar">
              {modalContent}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
