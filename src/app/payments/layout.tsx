"use client";
import React from "react";
import RouteTabs from "@/components/shared/layout/RouteTabs";
import { PaymentTabs } from "@/data/tabs";

const layout = ({ children }: any) => {
  return (
    <div className="size-full">
      <div className="w-full flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
        <RouteTabs tabs={PaymentTabs} />
      </div>
      {children}
    </div>
  );
};

export default layout;
