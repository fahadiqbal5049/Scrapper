import React from "react";
import FilterBar from "./subs/FilterBar";
import KeywordChartPanel from "./subs/KeywordChartPanel";
import OrganicCompetitorsTable from "./subs/OrganicCompetitorsTable";
import { SeoOrPpcProvider } from "./context/SeoOrPpcContext";

const OrganicCompetitors: React.FC = () => {
  return (
    <SeoOrPpcProvider>
      <div className="w-full gap-5 pb-6 flex flex-col">
        <FilterBar />
        <KeywordChartPanel />
        <OrganicCompetitorsTable />
      </div>
    </SeoOrPpcProvider>
  );
};

export default OrganicCompetitors;
