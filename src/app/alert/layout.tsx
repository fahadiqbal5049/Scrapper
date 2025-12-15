"use client";
import RouteTabs from "@/components/shared/layout/RouteTabs";
import { AlertTabs } from "@/data/tabs";
import { usePathname } from "next/navigation";
import React from "react";
import FilterSection from "@/components/alert/shared/FilterSection";

const layout = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <div className="size-full">
      <div className="w-full flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
        <RouteTabs tabs={AlertTabs} rightSection={<FilterSection />} />
      </div>
      {children}
    </div>
  );
};

export default layout;
