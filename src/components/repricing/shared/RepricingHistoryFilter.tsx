import React from "react";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { RepricingMassiveAction } from "@/data/repricingData";
import DataExportButton from "@/components/shared/DataExportButton";


const RepricingHistoryFilter = () => {
  return (
    <div className="flex flex-wrap justify-start sm:justify-end items-center gap-4">
      <CustomSelect
        placeholder="Massive Action"
        options={RepricingMassiveAction}
      />
      <DataExportButton className="border-white-4"/>
    </div>
  );
};

export default RepricingHistoryFilter;
