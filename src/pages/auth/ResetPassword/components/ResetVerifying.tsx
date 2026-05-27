import { Loader2 } from "lucide-react";

export const ResetVerifying = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary-500 mb-4" />
    </div>
  );
};
