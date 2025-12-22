import React from "react";
import Header from "./subs/Header";
import ReportListTable from "./subs/ReportListTable";

const Report = () => {
  return (
    <div className="size-full flex flex-col items-center gap-4 sm:gap-6">
      <Header />
      <ReportListTable />
    </div>
  );
};

export default Report;
