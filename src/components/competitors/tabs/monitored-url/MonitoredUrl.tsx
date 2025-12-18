"use client";

import React, { useState } from "react";
import SearchHeader from "./subs/SearchHeader";
import MonitoredTable from "./subs/MonitoredTable";
import BasicPagination from "@/components/shared/BasicPagination";
import FilterStatus from "./subs/FilterStatus";

const MonitoredUrl = () => {
  // for pagination ------->
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 50;

  // Actions ----------------->
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <FilterStatus />

      <div className="w-full bg-primary pb-3 rounded-lg px-3 sm:px-4 flex flex-col">
        <SearchHeader />
        <MonitoredTable />
      </div>

      <BasicPagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MonitoredUrl;
