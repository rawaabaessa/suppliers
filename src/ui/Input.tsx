import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  isPassword?: boolean;
}

const Input = ({ label, placeholder, isPassword }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col mb-4">
      <label className="block text-gray-green mb-2">{label}</label>
      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          className="border-2 border-white-border input-shadow rounded-xl p-2 w-full placeholder:text-sm focus:outline-none focus:border-primary transition duration-300"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev: boolean) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? (
              <EyeOff size={16} className="text-gray-green" />
            ) : (
              <Eye size={16} className="text-gray-green" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
