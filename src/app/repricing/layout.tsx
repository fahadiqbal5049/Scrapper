"use client";

import RouteTabs from "@/components/shared/layout/RouteTabs";
import { RepricingTabs } from "@/data/tabs";
import React from "react";
import FilterSection from "@/components/repricing/shared/FilterSection";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const layout = ({ children }: any) => {
  const pathName = usePathname();

  return (
    <div className="size-full">
      <div
        className={clsx(
          "w-full flex items-center",
          pathName !== "/repricing/my-repricing-rules/edit-repricing-rule" &&
            "gap-4 sm:gap-5 mb-4 sm:mb-6"
        )}
      >
        {pathName !== "/repricing/my-repricing-rules/edit-repricing-rule" && (
          <RouteTabs tabs={RepricingTabs} rightSection={<FilterSection />} />
        )}
      </div>
      {children}
    </div>
  );
};

export default layout;
