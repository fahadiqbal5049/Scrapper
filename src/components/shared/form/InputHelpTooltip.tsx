import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as Icons from "@/svg/Icons";
import clsx from "clsx";

interface Props {
  helperText?: string;
  className?: string;
  fill?: string;
}

const InputHelpTooltip: React.FC<Props> = ({
  helperText = "Compare to Your Site",
  className = "size-[20px]",
  fill = "fill-[#A3A3A3]",
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="focus:outline-none">
          <Icons.exclamation className={clsx(className)} fill={fill} />
        </TooltipTrigger>
        <TooltipContent>{helperText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InputHelpTooltip;
