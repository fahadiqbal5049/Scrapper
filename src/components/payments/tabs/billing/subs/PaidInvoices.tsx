import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { paidInvoices, PayWithOptions } from "@/data/paymentsData";
import { ChevronDown, CircleCheckBig } from "lucide-react";
import React from "react";

const PaidInvoices = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Typography className="font-medium">Paid Invoices</Typography>
      <div className="w-full rounded-lg  px-3 sm:px-4 py-4 sm:py-6 bg-primary">
        <div className="w-full flex flex-col  xl:w-[65%] gap-5">
          <div className="w-full flex flex-col gap-3">
            <Typography className="font-medium" color="primary">
              Open Invoices
            </Typography>
            <div className="w-full flex flex-col gap-5 md:gap-8">
              {paidInvoices.map((item: any, index: number) => (
                <div key={index} className="w-full grid gap-4 md:grid-cols-2">
                  <aside className="size-full flex gap-2">
                    {item.month == "Debit Note" ? (
                      <InputHelpTooltip
                        className="size-[20px] -mt-8"
                        helperText="Debit Note"
                      />
                    ) : (
                      <CircleCheckBig
                        size={20}
                        strokeWidth={1.5}
                        className="text-white-2 shrink-0"
                      />
                    )}
                    <div className="flex flex-col gap-1">
                      <Typography className="font-medium">
                        {item.month}
                      </Typography>
                      <Typography color="primary">{item.detail}</Typography>
                    </div>
                  </aside>
                  <aside className="size-full flex items-center justify-between gap-3">
                    {item.month == "Debit Note" ? (
                      <button className="h-[29px] w-[100px] border-none pointer-events-none opacity-0">
                        asd
                      </button>
                    ) : (
                      <button className="h-[29px] w-[100px] border border-white-2 rounded-[6px] flex  items-center  justify-center">
                        <Typography variant="small" color="primary">
                          Specification
                        </Typography>
                      </button>
                    )}
                    <Button
                      className="h-[29px] text-xs font-normal w-[80px]"
                      variant={"orangeGradient"}
                    >
                      Invoice
                    </Button>
                    <Typography variant="small" color="primary">
                      {item.amount}
                    </Typography>
                  </aside>
                </div>
              ))}
            </div>
            <button className="h-[26px] w-full sm:w-[193px] mt-4 border border-white-2 rounded-[6px] flex items-center justify-between px-3">
              <Typography variant="small" color="primary">
                Show more invoices (19)
              </Typography>
              <ChevronDown size={12} className="text-white-2 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidInvoices;
