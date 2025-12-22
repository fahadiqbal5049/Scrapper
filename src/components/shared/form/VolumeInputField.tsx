import Typography from "@/components/ui/typography";
import React from "react";
import InputHelpTooltip from "./InputHelpTooltip";
import { Input } from "@/components/ui/input";


interface Props {
  label?: string;
  tooltipText?: string;
  placeholder1: string;
  placeholder2: string;
}

const VolumeInputField: React.FC<Props> = ({
  label,
  tooltipText,
  placeholder1,
  placeholder2,
}: Props) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <label htmlFor="">
          <Typography variant="p" className="font-semibold" color="primary">
            {label}
          </Typography>
        </label>
        <InputHelpTooltip helperText={tooltipText} />
      </div>
      <div className="w-full border-[1px] rounded-[2px] border-[#4E4E4E] grid grid-cols-2">
        <span className="border-r-[1px] border-[#4E4E4E]">
          <Input
            type="number"
            className="border-none"
            placeholder={placeholder1}
          />
        </span>
        <Input
          type="number"
          className="border-none"
          placeholder={placeholder2}
        />
      </div>
    </div>
  );
};

export default VolumeInputField;
