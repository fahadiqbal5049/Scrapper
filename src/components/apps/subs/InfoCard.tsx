import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import React from "react";

type Props = {
  title: string;
  description: string;
  tryBtn?: boolean;
  actionBtnTxt?: string;
  actionBtnStyles?: string;
  actionBtnType?: any;
  styles?: string;
};
const InfoCard = ({
  title,
  description,
  tryBtn = false,
  actionBtnTxt = "Install",
  actionBtnStyles = "w-[50px]",
  actionBtnType = "orangeGradient",
  styles = "gap-3",
}: Props) => {
  return (
    <div
      className={clsx(
        "size-full bg-primary rounded-md py-3 flex flex-col ",
        styles
      )}
    >
      <Typography className="px-3 font-semibold">{title}</Typography>
      <span className="w-full h-[0.5px] bg-white-2"></span>
      <div className="w-full px-3 flex flex-col gap-3">
        <Typography variant="small" className="lg:w-[70%]">
          {description}
        </Typography>
        <div className="w-full flex items-center justify-end gap-2 sm:gap-4">
          {tryBtn && (
            <Button
              variant={"outline"}
              className="h-[26px] w-[50px] text-xs font-normal"
            >
              Try
            </Button>
          )}
          <Button
            variant={actionBtnType}
            className={clsx("!h-[26px] text-xs font-normal", actionBtnStyles)}
          >
            {actionBtnTxt}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
