import type { LucideIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon: LucideIcon;
}

export const Input = ({ label, icon: Icon, name, ...props }: InputProps) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-primary-800 ml-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-600 w-5 h-5" />

        <input
          name={name}
          className="w-full border border-primary-100 rounded-xl py-3 px-11 
                     focus:ring-2 focus:ring-secondary-500 focus:border-transparent 
                     outline-none transition-all text-primary-900 placeholder:text-primary-600"
          {...props}
        />
      </div>
    </div>
  );
};
