import React from "react";
import { SeoOrPpcProvider } from "./context/SeoOrPpcContext";
import FilterBar from "./subs/FilterBar";
import KeywordChartPanel from "./subs/PaidKeywordChartPanel";
import OrganicCompetitorsTable from "./subs/PaidCompetitorsTable";

const PaidCompetitors: React.FC = () => {
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

export default PaidCompetitors;
