import React from "react";
import * as Icons from "@/svg/Icons";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import Link from "next/link";

interface Props {
  title: string;
  currentValue: string;
  changePercentage: string;
  icon: React.ReactNode;
  iconBgColor: string;
  widgetInfo: string;
  redirectLink?: string;
}

const StatsCard: React.FC<Props> = ({
  title,
  currentValue,
  changePercentage,
  icon,
  iconBgColor,
  widgetInfo,
  redirectLink,
}: Props) => {
  const isNegative = parseFloat(changePercentage) < 0;

  return (
    <div className="w-full relative mx-auto flex gap-1 flex-col rounded-lg bg-primary p-3 sm:p-4">
      <div className="flex justify-start items-center gap-2">
        <div
          className={clsx(
            "w-[70px] flex justify-center items-center h-[70px] rounded-full",
            iconBgColor
          )}
        >
          {icon}
        </div>
        <div className="flex justify-start items-center gap-1">
          <Typography variant="p" color="primary" className="font-semibold">
            {" "}
            {title}
          </Typography>
          <InputHelpTooltip helperText={widgetInfo} />
        </div>
      </div>
      <div className="w-full flex justify-start items-center gap-4">
        <Typography variant="h2">{currentValue}</Typography>
        <div className="flex justify-center items-center gap-1">
          <Typography variant="small" color={isNegative ? "pink" : "success"}>
            {changePercentage}
          </Typography>
          {isNegative ? (
            <Icons.downGrowth fill="fill-pink-1" className="w-[13px] h-[9px]" />
          ) : (
            <Icons.upGrowth
              fill="fill-success-1"
              className="w-[13px] h-[9px]"
            />
          )}
        </div>
        {redirectLink && (
          <Link
            href={redirectLink}
            className="text-[14px] absolute bottom-3 right-3 font-normal bg-orange-text-gradient bg-clip-text text-transparent"
          >
            View More
          </Link>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
