import React from "react";
import StatsWidget from "./subs/StatsWidget";
import * as Icons from "@/svg/Icons";
import CompetitorsTable from "./subs/CompetitorsTable";
import DataChart from "./subs/DataChart";

const Overview: React.FC = () => {
  return (
    <div className="w-full flex gap-4 flex-col">
      {/*stats widgets ----------------> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <StatsWidget
          title="Competitive Products"
          currentValue="10/10"
          changePercentage="+11.01%"
          widgetInfo="Competitive Products"
          redirectLink="/competitors"
          icon={
            <Icons.shop fill="fill-primary" className="w-[26px] h-[31px]" />
          }
          iconBgColor="bg-pink-1"
        />
        <StatsWidget
          title="Same Price Products"
          currentValue="10/10"
          changePercentage="-11.01%"
          redirectLink="/competitors"
          widgetInfo="Same Price Products"
          icon={
            <Icons.fileUpload
              fill="fill-[#323232]"
              className="w-[20px] h-[25px]"
            />
          }
          iconBgColor="bg-success-1"
        />
        <StatsWidget
          title="Overpriced Products"
          currentValue="10/10"
          changePercentage="+11.01%"
          redirectLink="/competitors"
          widgetInfo="Overpriced Products"
          icon={
            <Icons.leaderboard
              fill="fill-primary"
              className="w-[30px] h-[26px]"
            />
          }
          iconBgColor="bg-orange-gradient"
        />
      </div>
      {/* data chart --------> */}
      <DataChart />
      {/* competitiors table ------------> */}
      <CompetitorsTable />
    </div>
  );
};

export default Overview;
