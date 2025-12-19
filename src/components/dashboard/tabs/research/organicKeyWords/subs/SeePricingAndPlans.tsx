import React from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/shared/NextImage";

interface Props {
  handlePlaneSub?: () => void;
}

const SeePricingAndPlans: React.FC<Props> = ({ handlePlaneSub }: Props) => {
  return (
    <div className="w-full max-w-[600px] p-4 justify-center items-center absolute left-1/2 flex flex-col gap-6 sm:gap-10 -translate-x-1/2 bottom-9">
      <div className="flex flex-col justify-center items-center">
        <Typography variant="h4" color="primary" className="font-semibold">
          Want to view more results?
        </Typography>
        <Typography variant="p" color="primary" className="text-center">
          To view more data, subscribe to one of our plans.
        </Typography>
      </div>
      <div className="w-full grid grid-cols-3 gap-5">
        {SubscribeBenefitsData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex w-full justify-center items-center gap-2 flex-col"
            >
              <NextImage
                width="w-[44px]"
                height={item.height}
                source={item.icon}
                objectFit="object-cover"
              />
              <Typography
                variant="p"
                color="primary"
                className="leading-[20px] text-center"
              >
                {item.text}
              </Typography>
            </div>
          );
        })}
      </div>
      <Button
        onClick={handlePlaneSub}
        variant="primary"
        className="w-full max-w-[400px]"
      >
        See Plans And Pricing
      </Button>
    </div>
  );
};

export default SeePricingAndPlans;

const SubscribeBenefitsData = [
  {
    height: "h-[50px]",
    icon: "/icons/filter.png",
    text: "Advanced filtering and sorting options",
  },
  {
    height: "h-[38px]",
    icon: "/icons/database.png",
    text: "Huge keyword database at your fingertips",
  },
  {
    height: "h-[54px]",
    icon: "/icons/file.png",
    text: "Huge keyword database at your fingertips",
  },
];
