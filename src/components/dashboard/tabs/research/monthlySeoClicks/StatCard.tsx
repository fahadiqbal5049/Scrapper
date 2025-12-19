import Typography from "@/components/ui/typography";
import React from "react";
import clsx from "clsx";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";


type Props = {
  title: string;
  titleValue: string | React.ReactNode;
  bgGradient?: boolean;
  info?: string;
};

const StatCard = ({
  title,
  titleValue,
  bgGradient = false,
  info = title,
}: Props) => {
  return (
    <div
      className={clsx(
        "h-[66px] sm:w-auto w-full flex-shrink-0 flex flex-col items-start justify-center gap-1 px-3 rounded-sm",
        bgGradient ? "bg-orange-gradient" : "border-[0.5px] border-orange-1"
      )}
    >
      <div className="w-full flex items-center justify-between gap-5">
        <Typography variant="small" className="font-normal">
          {title}
        </Typography>
        <InputHelpTooltip
          helperText={info}
          className="size-[16px]"
          fill={bgGradient ? "fill-[#fff]" : "fill-[#A3A3A3]"}
        />
      </div>
      {typeof titleValue === "string" ? (
        <Typography variant="text" className="font-semibold">
          {titleValue}
        </Typography>
      ) : (
        titleValue
      )}
    </div>
  );
};

export default StatCard;
