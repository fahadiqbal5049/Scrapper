import React from "react";
import SearchHeader from "./subs/SearchHeader";
import MapInfringementsTable from "./subs/MapInfringementsTable";

const MapInfringements: React.FC = () => {
  return (
    <div className="w-full bg-primary pb-3 rounded-lg px-3 sm:px-4 flex flex-col">
      <SearchHeader />
      <MapInfringementsTable />
    </div>
  );
};

export default MapInfringements;
