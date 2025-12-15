import React from "react";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { MassiveActionOptions } from "@/data/competitorData";
import DataExportButton from "@/components/shared/DataExportButton";
import { exportOptions } from "@/data/InventoryManagmentData";

const SoldItemsFilter = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
      {/* filters ---------->   */}

      <CustomSelect
        placeholder="Massive Action"
        options={MassiveActionOptions}
      />
      <DataExportButton
        options={exportOptions}
        icon
        text="Export"
        className="border-white-4"
      />
    </div>
  );
};

export default SoldItemsFilter;
