import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import Typography from "../ui/typography";
import { exportOptions } from "@/data/organicKeyWords";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

interface Props {
  className?: string;
  options?: any[];
  icon?: boolean;
  text?: string;
}

const DataExportButton: React.FC<Props> = ({
  className = "border-white-2",
  options = exportOptions,
  icon = false,
  text = "Export All",
}: Props) => {
  return (
    <Popover>
      <PopoverTrigger
        className={clsx(
          "flex h-9 px-2 justify-center items-center gap-2 border-[1px] rounded-sm",
          className
        )}
      >
        <Typography variant="p" color="primary">
          {text}
        </Typography>
        {icon && <ChevronDown size={16} className="text-white-2" />}
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="flex z-40 mt-2 rounded-lg shadow-xl bg-secondary  p-3 flex-col gap-2"
      >
        {options.map((item, index) => {
          const iconFill = "fill-white-2  group-hover:fill-white-1";
          return (
            <button
              key={index}
              className="flex group justify-start items-center gap-2"
            >
              <item.icon className="w-[14px] h-[14px]" fill={iconFill} />
              <Typography
                variant="p"
                color="primary"
                className={clsx("hover:text-white-1 text-white-2")}
              >
                {item.type}
              </Typography>
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default DataExportButton;
