import React from "react";
import FilterBar from "../shared/FilterHeaderBar";
import FilterPanel from "./subs/FilterPanel";
import PaidKeyWordTable from "./subs/PaidKeyWordTable";

const PaidKeyWords = () => {
  return (
    <div className="w-full gap-5 pb-6 flex flex-col">
      <FilterBar currentPage="Paid Keywords" />
      <div className="w-full grid gap-4 grid-cols-1 cmd:grid-cols-[300px,calc(100%-300px)]">
        {/* filter + topics section ------> */}
        <FilterPanel />
        {/* keywords table --------->  */}
        <PaidKeyWordTable />
      </div>
    </div>
  );
};

export default PaidKeyWords;
