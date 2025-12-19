"use client";

import React from "react";
import CompetitorFilter from "./CompetitorFilter";
import { usePathname } from "next/navigation";
import MonitoredUrlFilter from "./MonitoredUrlFilter";
import MapInfringementFilter from "./MapInfringementFilter";
import DataExportButton from "@/components/shared/DataExportButton";
import { exportOptions } from "@/data/InventoryManagmentData";

const FilterSection: React.FC = () => {
  const pathName = usePathname();

  return (
    <div>
      {pathName === "/competitors/monitored-url" && <MonitoredUrlFilter />}
      {pathName === "/competitors/competitors-overview" && <CompetitorFilter />}
      {(pathName === "/competitors/monitored-url/product-overview" ||
        pathName === "/competitors/map-infringements/product-overview") && (
        <DataExportButton
          options={exportOptions}
          icon
          text="Export"
          className="border-white-4"
        />
      )}
      {pathName === "/competitors/map-infringements" && (
        <MapInfringementFilter />
      )}
    </div>
  );
};

export default FilterSection;
