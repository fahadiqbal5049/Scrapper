"use client";
import React, { useState } from "react";
import { Filter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { SavedFilterOptions } from "@/data/competitorData";
import { CompetitorOptions } from "@/data/competitorData";
import { StockOptions } from "@/data/competitorData";
import { StatusOptions } from "@/data/competitorData";
import { DiffOptions } from "@/data/competitorData";

const OrderListFilter = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
      {/* filters ---------->   */}
      <Popover onOpenChange={handleOpen} open={isOpened}>
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
            options={SavedFilterOptions}
          />
          <CustomSelect
            size="w-full"
            label="Competitor"
            options={CompetitorOptions}
          />
          <CustomSelect
            size="w-full"
            label="Brand"
            options={CompetitorOptions}
          />
          <CustomSelect size="w-full" label="Brand" options={StockOptions} />
          <CustomSelect size="w-full" label="Status" options={StatusOptions} />
          <CustomSelect size="w-full" label="Diff" options={DiffOptions} />
          <div className="w-full mt-1 flex justify-between items-center">
            <Button onClick={handleOpen} variant="underline" className="px-0">
              Clear
            </Button>
            <Button
              onClick={handleOpen}
              variant="orangeGradient"
              className="rounded-sm"
              size="sm"
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default OrderListFilter;
