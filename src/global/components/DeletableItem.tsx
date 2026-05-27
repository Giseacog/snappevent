import { ModalContext } from "context/ModalContext";
import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import { DeleteItemModal } from "./modals/DeleteItemModal";
import { TEXTS } from "global/texts";

interface DeletableItemProps extends React.PropsWithChildren {
  itemName?: string;
  confirmHandler?: () => void;
  loading: boolean;
}

export const DeletableItem = ({
  children,
  itemName,
  confirmHandler,
  loading,
}: DeletableItemProps) => {
  const controls = useAnimation();
  const { openModal, closeModal } = useContext(ModalContext);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-red-500 flex justify-start items-center pl-6 text-white font-bold text-sm">
        {TEXTS.general.delete}
      </div>

      <motion.div
        drag="x"
        dragDirectionLock
        dragConstraints={{ left: 0, right: 80 }}
        dragElastic={0.2}
        animate={controls}
        className="relative bg-white z-10 rounded-[2rem]"
        onDragEnd={(_, info) => {
          if (info.offset.x > 60) {
            controls.start({ x: 80 });
            openModal(
              <DeleteItemModal
                onClose={closeModal}
                itemName={itemName}
                confirmHandler={confirmHandler}
                isLoading={loading}
              />
            );
          } else {
            controls.start({ x: 0 });
          }
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
