import React from "react";
import OutstandingAmount from "./subs/OutstandingAmount";
import OutstandingInvoices from "./subs/OutstandingInvoices";
import PaidInvoices from "./subs/PaidInvoices";
import AnnualOverview from "./subs/AnnualOverview";
import Specifications from "./subs/Specifications";

const Billing = () => {
  return (
    <div className="size-full flex flex-col gap-5 sm:gap-8">
      <OutstandingAmount />
      <OutstandingInvoices />
      <PaidInvoices />
      <AnnualOverview />
      <Specifications />
    </div>
  );
};

export default Billing;
