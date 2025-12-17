import React from "react";
import FilterStatus from "./subs/FilterStatus";
import SearchHeader from "./subs/SearchHeader";
import CompetitorTable from "./subs/CompetitorTable";

const Competitors = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <FilterStatus />
      {/* competitors table --------> */}
      <div className="w-full bg-primary rounded-lg px-3 pb-3 sm:px-4 flex flex-col">
        <SearchHeader />
        <CompetitorTable />
      </div>
    </div>
  );
};

export default Competitors;
