import InfoCard from "@/components/apps/subs/InfoCard";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const OngoingSubscription = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Typography
        variant="text"
        color="primary"
        className="font-medium text-lg"
      >
        Ongoing subscription
      </Typography>
      <div className="w-full grid md:grid-cols-3 gap-6 lg:gap-8">
        <div className="w-full md:row-span-2 bg-primary rounded-lg px-4 py-6 flex flex-col gap-3">
          <div className="w-full flex flex-col gap-1">
            <Typography variant="small" color="primary">
              Free
            </Typography>
            <Typography variant="h4" className="font-medium">
              Free
            </Typography>
            <Typography color="primary">Forever Free</Typography>
          </div>{" "}
          <Button
            variant={"outline"}
            className="h-[25px] w-[90px] text-xs font-normal"
          >
            Your Profile
          </Button>
          <div className="w-full flex flex-col gap-2 mt-2">
            <Typography
              variant="small"
              className="font-semibold uppercase"
              color="primary"
            >
              Features
            </Typography>
            {[
              "Up To 50 Products",
              "3 Competitors",
              "Competitors Scraped Once Per Day",
              "Up To 50 Products",
            ].map((item: string, index: number) => (
              <div key={index} className="w-full flex gap-2">
                <CircleCheckBig size={18} className="shrink-0 text-white-2" />
                <Typography color="primary" variant="small">
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <InfoCard
          title={"Research Pro"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
          actionBtnTxt="Open"
          actionBtnType={"gradientOutline"}
          actionBtnStyles="w-[70px] !text-orange-1"
        />
        <InfoCard
          title={"Inventory Management"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
          actionBtnTxt="Open"
          actionBtnType={"gradientOutline"}
          actionBtnStyles="w-[70px] !text-orange-1"
        />
        <InfoCard
          title={"Research Pro"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
          actionBtnTxt="Open"
          actionBtnType={"gradientOutline"}
          actionBtnStyles="w-[70px] !text-orange-1"
        />
        <InfoCard
          title={"Inventory Management"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
          actionBtnTxt="Open"
          actionBtnType={"gradientOutline"}
          actionBtnStyles="w-[70px] !text-orange-1"
        />
      </div>
    </div>
  );
};

export default OngoingSubscription;
