import type { Item } from "types/entities/Item";
import { DeleteButton } from "../../../global/components/DeleteButton";
import { motion } from "framer-motion";
import { itemCardAnimation } from "global/motion/motion";
import { useDeactivateItem } from "api/hooks/items/useDeactivateItem";
import { useContext } from "react";
import { ModalContext } from "context/ModalContext";
import { DeleteItemModal } from "global/components/modals/DeleteItemModal";
import { Link } from "react-router-dom";
import Paths from "routes/paths";

interface ItemCardProps {
  item: Item;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  const { deactivateItem, isLoading } = useDeactivateItem();
  const { openModal, closeModal } = useContext(ModalContext);

  const handleOnDelete = () => {
    openModal(
      <DeleteItemModal
        confirmHandler={() => deactivateItem(item.id)}
        itemName={item.name}
        isLoading={isLoading}
        onClose={closeModal}
      />
    );
  };

  return (
    <motion.li
      {...itemCardAnimation}
      className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-xl hover:border-primary-100 cursor-pointer group relative flex justify-between items-center overflow-hidden"
    >
      <Link to={Paths.ITEM_DETAIL_PATH(item.id)} className="flex-1 z-10">
        <div className="absolute left-0 top-0 h-full w-1 bg-primary-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

        <h4 className="text-md font-medium text-slate-800 group-hover:text-primary-600 transition-colors duration-300">
          {item.name}
        </h4>
        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">
          {new Date(item.createdAt).toLocaleDateString()}
        </p>
      </Link>

      <div className="z-10">
        <DeleteButton deleteHandler={handleOnDelete} isLoading={isLoading} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.li>
  );
};
