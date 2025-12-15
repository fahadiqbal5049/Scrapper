"use client";
import RouteTabs from "@/components/shared/layout/RouteTabs";
import { CompetitorTabs } from "@/data/tabs";
import React from "react";
import FilterSection from "@/components/competitors/shared/FilterSection";
import { CompetitorFilterProvider } from "@/components/competitors/context/context";

const layout = ({ children }: any) => {
  return (
    <CompetitorFilterProvider>
      <div className="size-full">
        <div className="w-full flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
          <RouteTabs tabs={CompetitorTabs} rightSection={<FilterSection />} />
        </div>
        {children}
      </div>
    </CompetitorFilterProvider>
  );
};

export default layout;
