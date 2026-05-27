import { Eye, EyeClosed, Lock } from "lucide-react";
import { useState } from "react";
import { TEXTS } from "global/texts";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const PasswordInput = ({ label, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const buttonIcon = showPassword ? <EyeClosed /> : <Eye />;
  const inputType = showPassword ? "text" : "password";

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-primary-800 ml-1">
        {label || TEXTS.auth.passwordInput.defaultLabel}
      </label>

      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-600 w-5 h-5" />

        <input
          name="password"
          className="w-full border border-primary-100 rounded-xl py-3 px-11 
                     focus:ring-2 focus:ring-secondary-500 focus:border-transparent 
                     outline-none transition-all text-primary-900 placeholder:text-primary-600"
          type={inputType}
          placeholder="••••••••"
          {...props}
        />

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-600 w-5 h-5"
          onClick={(e) => toggleShowPassword(e)}
          type="button"
        >
          {buttonIcon}
        </button>
      </div>
    </div>
  );
};
