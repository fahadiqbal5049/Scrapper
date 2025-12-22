import Typography from "@/components/ui/typography";
import React from "react";
import PreferenceTable from "./subs/PreferenceTable";

const CommunicationPreference = () => {
  return (
    <div className="size-full">
      <div className="w-full bg-primary rounded-lg px-4 py-5 sm:px-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
        <Typography className="font-medium">
          Manage from this page the communications you receive from us
        </Typography>
        <PreferenceTable />
      </div>
    </div>
  );
};

export default CommunicationPreference;
