import React from "react";
import StatsCardsSection from "./subs/StatsCardsSection";
import OrderStatsSection from "./subs/OrderStatsSection";
import SalesChart from "./subs/SalesChart";

const InventoryManagment = () => {
  return (
    <div className="size-full flex flex-col items-center justify-start gap-6 lg:gap-8">
      <StatsCardsSection />
      <OrderStatsSection />
      <SalesChart />
    </div>
  );
};

export default InventoryManagment;
