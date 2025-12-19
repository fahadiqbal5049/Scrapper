"use client";

import React, { useState } from "react";
import FilterBar from "../shared/FilterHeaderBar";
import FilterPanel from "./subs/FilterPanel";
import KeyWordsStatsTable from "./subs/KeyWordsStatsTable";

const OrganicKeyWords = () => {
  return (
    <div className="w-full gap-5 pb-6 flex flex-col">
      <FilterBar />
      <div className="w-full grid gap-4 grid-cols-1 cmd:grid-cols-[300px,calc(100%-300px)]">
        {/* filter + topics section ------> */}
        <FilterPanel />
        {/* keywords table --------->  */}
        <KeyWordsStatsTable />
      </div>
    </div>
  );
};

export default OrganicKeyWords;
