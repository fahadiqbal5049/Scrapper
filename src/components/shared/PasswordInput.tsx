import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder = "",
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        className="text-sm font-normal flex gap-1 text-white-2"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="w-full h-[43px] grid grid-cols-[1fr,40px] bg-[#3A4249] rounded-md">
        <input
          type={showPassword ? "text" : "password"}
          id={label}
          className="w-full h-full border-none focus:outline-none text-white-1/80 px-3 bg-transparent rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="flex justify-center items-center"
        >
          {showPassword ? (
            <EyeOff size={20} className="text-[#A3A3A3]" />
          ) : (
            <Eye size={20} className="text-[#A3A3A3]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
