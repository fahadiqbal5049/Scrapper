import CustomSelect from "@/components/shared/form/CustomSelect";
import Typography from "@/components/ui/typography";
import { PayWithOptions } from "@/data/paymentsData";
import { ComparsionOptions } from "@/data/repricingData";
import React from "react";

const OutstandingAmount = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Typography className="font-medium">Outstanding Amount</Typography>
      <div className="w-full flex flex-col rounded-lg  px-3 sm:px-4 py-4 sm:py-6 gap-5 bg-primary">
        <Typography color="primary" className="font-medium">
          Direct Online Payment
        </Typography>
        <Typography color="primary" className="lg:w-[50%]">
          Do you pay your bills manually? Then you can easily make the payment
          below using iDeal. If you pay via direct debit, you don't need to make
          an iDeal payment.
        </Typography>
        <div className="w-full lg:w-[50%] flex flex-col gap-3">
          <Typography color="primary">Make a choice</Typography>
          <div className="w-full h-[37px] border border-white-2 rounded-sm px-3 flex items-center justify-start">
            <Typography color="primary">Payment overdue : €31,07</Typography>
          </div>
          <div className="w-full h-[37px] border border-white-2 rounded-sm px-3 flex items-center justify-start">
            <Typography color="primary">
              Total outstanding amount : €62,14{" "}
            </Typography>
          </div>
          <CustomSelect
            options={PayWithOptions}
            placeholder="Pay with iDeal"
            triggerStyles="h-[29px] rounded-[4px] text-xs mt-3 sm:w-[190px] w-full border-none bg-orange-gradient text-white-1"
          />
        </div>
      </div>
    </div>
  );
};

export default OutstandingAmount;
