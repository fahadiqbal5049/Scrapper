"use client";

import React from "react";
import RouteTabs from "@/components/shared/layout/RouteTabs";
import { SuggesAFeatureTabs } from "@/data/tabs";
import HeaderRightSection from "@/components/suggest-a-feature/HeaderRightSection";

const layout = ({ children }: any) => {
  return (
    <div className="size-full">
      <div className="w-full flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
        <RouteTabs
          tabs={SuggesAFeatureTabs}
          rightSection={<HeaderRightSection />}
        />
      </div>
      {children}
    </div>
  );
};

export default layout;
