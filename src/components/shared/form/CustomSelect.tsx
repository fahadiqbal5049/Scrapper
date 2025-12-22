import React from "react";
import Typography from "@/components/ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";

interface CustomSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: string;
  triggerStyles?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  placeholder = "Select an option",
  value,
  size,
  triggerStyles,
  onChange,
}) => {
  return (
    <div className={clsx(" flex flex-col", size, label && "gap-1")}>
      <label htmlFor={label} className="">
        <Typography variant="p" color="primary">
          {label}
        </Typography>
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={clsx(
            "w-full gap-1 border-[1px] border-white-4 rounded-sm",
            triggerStyles
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
