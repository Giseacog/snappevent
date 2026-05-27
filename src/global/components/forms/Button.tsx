import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "link";
type ButtonColor = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "solid",
  color = "primary",
  isLoading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "w-full flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg cursor-pointer";

  const styles: Record<ButtonVariant, Record<ButtonColor, string>> = {
    solid: {
      primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-sm",
      secondary: "bg-secondary-600 text-white hover:bg-secondary-700 shadow-sm",
      danger: "bg-danger-600 text-white hover:bg-danger-700 shadow-sm",
    },
    outline: {
      primary:
        "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
      secondary:
        "border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-50",
      danger: "border-2 border-danger-600 text-danger-600 hover:bg-danger-50",
    },
    link: {
      primary: "bg-transparent text-primary-600 hover:underline p-0",
      secondary: "bg-transparent text-secondary-600 hover:underline p-0",
      danger: "bg-transparent text-danger-600 hover:underline p-0",
    },
  };

  // 3. Clases de tamaño y utilidad
  const sizeClasses = variant === "link" ? "" : "px-5 py-3";
  const widthClass = fullWidth ? "w-full" : "w-fit";

  return (
    <button
      className={`
        ${baseStyles} 
        ${styles[variant][color]} 
        ${sizeClasses} 
        ${widthClass} 
        ${className}
      `}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : children}
    </button>
  );
};
