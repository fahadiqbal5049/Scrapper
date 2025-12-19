import React from "react";
import StatsCard from "./StatsCard";
import * as Icons from "@/svg/Icons";
const StatsCardsSection = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
      <StatsCard
        title="Value of Stock"
        currentValue="$1000"
        changePercentage="+11.01%"
        widgetInfo="Value of Stock"
        icon={<Icons.tag className="size-[26px]" />}
        iconBgColor="bg-pink-1"
      />
      <StatsCard
        title="No. of Stock"
        currentValue="1000"
        changePercentage="+11.01%"
        redirectLink="/dashboard/inventory-managment/no-of-stocks"
        widgetInfo="No. of Stock"
        icon={<Icons.shop fill="fill-primary" className="w-[26px] h-[31px]" />}
        iconBgColor="bg-success-1"
      />
      <StatsCard
        title="No. of Sold Items"
        currentValue="1000"
        changePercentage="+11.01%"
        redirectLink="/dashboard/inventory-managment/no-of-solditems"
        widgetInfo="No. of Sold Items"
        icon={
          <Icons.leaderboard
            fill="fill-primary"
            className="w-[30px] h-[26px]"
          />
        }
        iconBgColor="bg-orange-2"
      />
      <StatsCard
        title="Purchased Value"
        currentValue="$1000"
        changePercentage="+11.01%"
        widgetInfo="Purchased Value"
        icon={<Icons.tag className="size-[26px]" />}
        iconBgColor="bg-yellow-1"
      />
    </div>
  );
};

export default StatsCardsSection;
