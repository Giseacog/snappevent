import { AlertTriangle } from "lucide-react";
import { Button } from "../forms/Button";
import { TEXTS } from "global/texts";

interface DeleteItemModalProps {
  onClose: () => void;
  itemName?: string;
  confirmHandler?: () => void;
  isLoading: boolean;
}

export const DeleteItemModal = ({
  onClose,
  itemName,
  confirmHandler,
  isLoading,
}: DeleteItemModalProps) => {
  const displayName = itemName || TEXTS.general.thisItem;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 animate-pulse">
        <AlertTriangle size={32} />
      </div>

      <p className="mb-8 text-md leading-relaxed text-slate-500">
        {TEXTS.modals.deleteItem.confirmText}{" "}
        <span className="font-semibold text-slate-700">{displayName}</span>?
      </p>

      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Button onClick={onClose}>{TEXTS.general.cancel}</Button>

        <Button color="danger" onClick={confirmHandler} isLoading={isLoading}>
          {TEXTS.modals.deleteItem.confirmButton}
        </Button>
      </div>
    </div>
  );
};
