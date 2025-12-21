import CustomSelect from "@/components/shared/form/CustomSelect";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import Typography from "@/components/ui/typography";
import { PayWithOptions } from "@/data/paymentsData";
import { Calendar } from "lucide-react";
import React from "react";

const OutstandingInvoices = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Typography className="font-medium">Outstanding Invoices</Typography>
      <div className="w-full rounded-lg  px-3 sm:px-4 py-4 sm:py-6 bg-primary">
        <div className="w-full flex flex-col  xl:w-[75%] gap-5">
          <div className="w-full flex flex-col gap-2">
            <Typography className="font-medium" color="primary">
              Open Invoices
            </Typography>
            <div className="w-full grid gap-4 md:grid-cols-2">
              <aside className="size-full flex gap-2">
                <Calendar
                  size={20}
                  strokeWidth={1.5}
                  className="text-white-2"
                />
                <div className="flex flex-col gap-1">
                  <Typography className="font-medium">April 2024</Typography>
                  <Typography color="primary">
                    The final payment date is April 21, 2024.
                  </Typography>
                </div>
              </aside>
              <aside className="size-full flex items-center justify-between gap-3">
                <button className="h-[29px] w-[100px] border border-white-2 rounded-[6px] flex  items-center  justify-center">
                  <Typography variant="small" color="primary">
                    Specification
                  </Typography>
                </button>{" "}
                <CustomSelect
                  options={PayWithOptions}
                  placeholder="Pay with iDeal"
                  triggerStyles="h-[29px] rounded-[4px] text-xs sm:w-[190px] w-full border-none bg-orange-gradient text-white-1"
                />
                <Typography variant="small" color="primary">
                  € 31,07
                </Typography>
              </aside>
            </div>
          </div>
          <div className="w-full grid gap-4 md:grid-cols-2">
            <aside className="size-full flex gap-2">
              <InputHelpTooltip
                className="size-[20px] -mt-[22px]"
                helperText="March 2024 Invoice"
              />
              <div className="flex flex-col gap-1">
                <Typography className="font-medium">March 2024</Typography>
                <Typography color="primary">
                  The invoice has not been paid yet.
                </Typography>
              </div>
            </aside>
            <aside className="size-full flex items-center justify-between gap-3">
              <button className="h-[29px] w-[100px] border border-white-2 rounded-[6px] flex  items-center  justify-center">
                <Typography variant="small" color="primary">
                  Specification
                </Typography>
              </button>{" "}
              <CustomSelect
                options={PayWithOptions}
                placeholder="Pay with iDeal"
                triggerStyles="h-[29px] rounded-[4px] text-xs sm:w-[190px] w-full border-none bg-orange-gradient text-white-1"
              />
              <Typography variant="small" color="primary">
                € 31,07
              </Typography>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstandingInvoices;
