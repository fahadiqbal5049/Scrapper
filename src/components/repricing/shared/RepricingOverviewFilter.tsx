"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typography from "@/components/ui/typography";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SavedFilterSetOptions,
  ResellerOptions,
  MapOptions,
  StatusOptions,
  RepricingMassiveAction,
} from "@/data/repricingData";

const RepricingOverviewFilter = () => {
  // stats --------->
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // actions ------------>

  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-wrap justify-start sm:justify-end items-center gap-4">
      {/* filter ---------->   */}
      <Popover onOpenChange={handleOpenChange} open={isOpen}>
        <PopoverTrigger
          className="cursor-pointer border-[1px] border-white-4/80 rounded-sm h-9 px-2"
          asChild
        >
          <div className="flex justify-center items-center gap-1">
            <Typography variant="p" color="primary">
              Filters
            </Typography>
            <Filter size={16} color="#A3A3A3" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="flex min-w-[260px] bg-secondary w-fit items-start border-transparent p-4 flex-col gap-3"
        >
          <CustomSelect
            size="w-full"
            label="Saved Filter Set"
            options={SavedFilterSetOptions}
          />
          <CustomSelect
            size="w-full"
            label="Reseller"
            options={ResellerOptions}
          />
          <CustomSelect size="w-full" label="MAP Status" options={MapOptions} />
          <CustomSelect size="w-full" label="Status" options={StatusOptions} />

          <div className="w-full mt-1 flex justify-between items-center">
            <Button
              onClick={handleOpenChange}
              variant="underline"
              className="px-0"
            >
              Clear
            </Button>
            <Button
              onClick={handleOpenChange}
              variant="orangeGradient"
              className="rounded-sm"
              size="sm"
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <CustomSelect
        placeholder="Massive Action"
        options={RepricingMassiveAction}
      />
    </div>
  );
};

export default RepricingOverviewFilter;
