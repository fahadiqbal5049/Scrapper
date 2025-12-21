import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Typography from "@/components/ui/typography";
import { Years } from "@/data/paymentsData";
import { FrequencyOptions } from "@/data/reportData";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React from "react";

const AnnualOverview = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Typography className="font-medium">
        Annual Overview of Invoices
      </Typography>
      <div className="w-full rounded-lg  px-3 sm:px-4 py-4 sm:py-6 bg-primary flex flex-col gap-5">
        <Typography className="font-medium" color="primary">
          Invoice overview for the year.
        </Typography>
        <div className="w-full md:w-[450px] px-3 py-4 rounded-[6px] bg-tertary flex items-center justify-between">
          <div className="size-full flex flex-col gap-1">
            <Typography className="font-medium">
              Download yearly invoice overview
            </Typography>
            <Typography color="primary">
              Select and download a yearly overview of your invoices
            </Typography>
          </div>
          <ChevronDown size={18} className="shrink-0 text-white-2" />
        </div>
        <Typography color="primary" className="font-medium md:mt-5">
          Do you want a yearly overview of your invoices? Please select below
          the year for which you want to download the overview.
        </Typography>
        <Typography color="primary" className="font-medium">
          Select year
        </Typography>
        <RadioGroup
          fillColor="fill-white-2"
          borderColor="border-white-2"
          textColor="text-white-2"
          defaultValue="Semi-Automatic"
          className="w-full flex-col flex gap-3 sm:gap-5"
        >
          {Years.map((item, index: number) => (
            <div key={index} className={clsx("flex items-center space-x-2")}>
              <RadioGroupItem
                className="size-[24px]"
                value={item.value}
                id={item.value}
                fillColor="fill-white-2"
                borderColor="border-white-2"
              />
              <div
                className={clsx(
                  "flex justify-between items-center gap-2 w-max-w-[270px] w-full"
                )}
              >
                <label
                  htmlFor={item.value}
                  className="flex justify-start items-center gap-2"
                >
                  <Typography variant="small" color="primary">
                    {item.label}
                  </Typography>
                </label>
              </div>
            </div>
          ))}
        </RadioGroup>
        <div className="w-full flex items-center gap-4 md:mt-4">
          <Button
            variant={"outline"}
            className="h-[26px] rounded-sm text-xs font-normal hover:bg-transparent hover:border-white-2 hover:text-white-2"
          >
            Cancel
          </Button>
          <Button
            variant={"orangeGradient"}
            className="h-[26px] rounded-sm text-xs font-normal"
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnualOverview;
