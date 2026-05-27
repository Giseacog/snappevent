import { ChevronDown, type LucideIcon } from "lucide-react";

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  icon: LucideIcon;
  options: Option[];
}

export const Select = ({
  label,
  icon: Icon,
  name,
  options,
  ...props
}: SelectProps) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-primary-800 ml-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-600 w-5 h-5 pointer-events-none" />

        <select
          name={name}
          className="w-full border border-primary-100 rounded-xl py-3 px-11 
                     appearance-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent 
                     outline-none transition-all text-primary-900 cursor-pointer"
          {...props}
        >
          <option value="">Selecciona una opción...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-400 w-5 h-5 pointer-events-none" />
      </div>
    </div>
  );
};
