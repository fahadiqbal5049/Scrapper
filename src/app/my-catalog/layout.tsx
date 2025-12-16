"use client";

import React from "react";
import RouteTabs from "@/components/shared/layout/RouteTabs";
import { MyCatalogTabs } from "@/data/tabs";
import FilterSection from "@/components/my-cataglog/shared/FilterSection";

const layout = ({ children }: any) => {
  return (
    <div className="size-full">
      <div className="w-full flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
        <RouteTabs tabs={MyCatalogTabs} rightSection={<FilterSection/>} />
      </div>
      {children}
    </div>
  );
};

export default layout;
