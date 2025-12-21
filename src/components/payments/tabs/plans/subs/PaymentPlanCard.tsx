import React from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
interface PaymentPlanCardProps {
  planName: string;
  tag: string;
  price: string;
  description: string;
  features: string[];
}
const PaymentPlanCard: React.FC<PaymentPlanCardProps> = ({
  planName,
  price,
  description,
  features,
  tag,
}) => {
  return (
    <div className="size-full flex flex-col gap-5 rounded-lg bg-primary px-4 py-5">
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex items-center justify-between">
          <Typography variant="small" color="primary">
            {planName}
          </Typography>
          <span className="flex items-center justify-center bg-pink-1/10 h-[25px] px-3 rounded-full">
            <Typography variant="small" color="pink">
              {tag}
            </Typography>
          </span>
        </div>
        <div className="flex gap-1 items-end">
          <Typography variant="h4" className="font-medium">
            {price}
          </Typography>
          <Typography variant="small" color="primary">
            per month
          </Typography>
        </div>
        <Typography variant="small" color="primary">
          {description}
        </Typography>
        <Button
          variant={"orangeGradient"}
          className="h-[26px] w-[88px] text-xs font-normal mt-2"
        >
          Select Plan
        </Button>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Typography
          variant="small"
          className="font-semibold uppercase"
          color="primary"
        >
          Features
        </Typography>
        {features.map((item: string, index: number) => (
          <div key={index} className="w-full flex gap-2">
            <CircleCheckBig size={18} className="shrink-0 text-white-2" />
            <Typography color="primary" variant="small">
              {item}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlanCard;
