"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typography from "../ui/typography";

interface ReusablePopoverProps {
  trigger: React.ReactNode;
  actions: { label: string; onClick: () => void }[];
  className?: string;
}

const ActionsPopover: React.FC<ReusablePopoverProps> = ({
  trigger,
  actions,
  className = "w-[120px]",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleActionClick = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className={` bg-secondary p-0 border-none ${className}`}>
        <div className="flex flex-col gap-2 p-3">
          {actions.map((action, index) => (
            <button
              key={index}
              className="flex items-center gap-2 active:outline-none outline-none border-none"
              onClick={() => handleActionClick(action.onClick)}
            >
              <Typography>{action.label}</Typography>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ActionsPopover;
