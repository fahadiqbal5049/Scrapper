"use client";

import React from "react";
import MyRepricingRulesFilter from "./MyRepricingRulesFilter";
import { usePathname } from "next/navigation";
import RepricingOverviewFilter from "./RepricingOverviewFilter";
import RepricingHistoryFilter from "./RepricingHistoryFilter";
import clsx from "clsx";

const FilterSection: React.FC = () => {
  const pathName = usePathname();

  return (
    <div>
      {pathName === "/repricing/my-repricing-rules" && (
        <MyRepricingRulesFilter />
      )}
      {pathName === "/repricing/repricing-overview" && (
        <RepricingOverviewFilter />
      )}
      {pathName === "/repricing/repricing-history" && (
        <RepricingHistoryFilter />
      )}
    </div>
  );
};

export default FilterSection;
