import { Loader2, Trash2 } from "lucide-react";

interface DeleteButtonProps {
  isLoading: boolean;
  deleteHandler: () => void;
}

export const DeleteButton = ({
  isLoading,
  deleteHandler,
}: DeleteButtonProps) => {
  return (
    <button
      onClick={deleteHandler}
      disabled={isLoading}
      className="p-2 rounded-full text-red-400 hover:bg-red-50 hover:text-red-600 transition-all duration-200 disabled:opacity-50 cursor-pointer"
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Trash2 className="w-5 h-5" />
      )}
    </button>
  );
};
