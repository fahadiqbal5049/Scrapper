import Typography from "@/components/ui/typography";
import React from "react";
import * as Icons from "@/svg/Icons";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
type Props = {
  Number: number;
  title: string;
  titleStat?: string;
  graphValue: number;
  graphColor?: string;
  info?: string;
};
const BarGraphWidget: React.FC<Props> = ({
  Number,
  title,
  graphValue,
  graphColor = "#FB0078",
  titleStat,
  info = title,
}) => {
  return (
    <div className="w-full flex items-start justify-start gap-2">
      <Typography className="flex-shrink-0">{Number}</Typography>
      <div className="w-full flex flex-col  items-start justify-start gap-1">
        <div className="w-full flex items-center justify-start gap-1">
          <Typography variant="small" color="secondary">
            {title}
          </Typography>
          {titleStat && (
            <>
              <Typography
                variant="small"
                color="secondary"
                className="font-semibold"
              >
                {titleStat}
              </Typography>
              <InputHelpTooltip
                helperText={info}
                className="size-[15px]"
                fill="fill-white-2"
              />{" "}
            </>
          )}
        </div>
        <span
          className="h-[14px] rounded-[3px] flex-shrink-0"
          style={{ width: `${graphValue}%`, backgroundColor: `${graphColor}` }}
        ></span>
      </div>
    </div>
  );
};

export default BarGraphWidget;
