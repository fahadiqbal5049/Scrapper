import React from "react";
import Typography from "../ui/typography";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import clsx from "clsx";

type URLInputWithActionProps = {
  protocol?: string;
  placeholder: string;
  label?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
  protocolStyles?: string;
  labelStyles?: string;
};

const URLInputWithAction: React.FC<URLInputWithActionProps> = ({
  protocol = "https;//",
  placeholder,
  buttonLabel,
  onButtonClick,
  label,
  className = "max-w-[675px]",
  protocolStyles = "",
  labelStyles = "",
}: URLInputWithActionProps) => {
  return (
    <div className="flex gap-1 flex-col">
      <Typography variant="h4" className={clsx("text-white-4", labelStyles)}>
        {label}
      </Typography>
      <div
        className={clsx(
          "pr-1 border-[1px] justify-center items-center border-[#555555] bg-transparent min-h-[44px] rounded-sm w-full grid grid-cols-[70px,1fr,80px] sm:grid-cols-[105px,1fr,124px]",
          className
        )}
      >
        {/* Protocol */}
        <Typography
          variant="text"
          className={clsx(
            "flex justify-center w-full items-center border-r-[1px] border-[#555555] h-full",
            protocolStyles
          )}
          color="primary"
        >
          {protocol}
        </Typography>
        <Input
          className="w-full h-full bg-transparent border-none"
          placeholder={placeholder}
        />
        <Button
          onClick={onButtonClick}
          className="w-full h-[80%] rounded-sm"
          variant="orangeGradient"
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default URLInputWithAction;
