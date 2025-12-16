import RouteTabs from "@/components/shared/layout/RouteTabs";
import { Button } from "@/components/ui/button";
import { SettingsTabs } from "@/data/tabs";
import React from "react";

const layout = ({ children }: any) => {
  return (
    <div className="size-full">
      <div className="w-full flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
        <RouteTabs
          tabs={SettingsTabs}
          rightSection={<Button variant={"outline"}>Save</Button>}
        />
      </div>
      {children}
    </div>
  );
};

export default layout;
