"use client";
import React, { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Checkbox } from "@/components/ui/checkbox";
import { SavedFilterOptions } from "@/data/competitorData";
import { CompetitorOptions } from "@/data/competitorData";
import { StockOptions } from "@/data/competitorData";
import { StatusOptions } from "@/data/competitorData";
import { DiffOptions } from "@/data/competitorData";
import { MassiveActionOptions } from "@/data/competitorData";
import { ColumnCheckBoxses } from "@/data/competitorData";
import { ImportExportOptions } from "@/data/competitorData";
import DataExportButton from "@/components/shared/DataExportButton";
import { exportOptions } from "@/data/InventoryManagmentData";

const NoOfStockFilters = () => {
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
            label="Name"
            options={SavedFilterOptions}
          />
          <CustomSelect
            size="w-full"
            label="Description"
            options={CompetitorOptions}
          />
          <CustomSelect
            size="w-full"
            label="Code"
            options={CompetitorOptions}
          />
          <CustomSelect size="w-full" label="Quantity" options={StockOptions} />
          <CustomSelect size="w-full" label="Price" options={DiffOptions} />
          <CustomSelect size="w-full" label="Status" options={StatusOptions} />

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
      {/* column ----->  */}
      <Popover>
        <PopoverTrigger
          className="cursor-pointer border-[1px] border-white-4/80 rounded-sm h-9 px-2"
          asChild
        >
          <div className="flex justify-center items-center gap-1">
            <Typography variant="p" color="primary">
              Columns
            </Typography>
            <ChevronDown size={16} color="#A3A3A3" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="flex min-w-[300px] bg-secondary w-fit items-start border-transparent p-4 flex-col gap-3"
        >
          {ColumnCheckBoxses.map((label, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-center gap-2"
              >
                <Checkbox
                  className="w-[18px] h-[18px]"
                  iconSize="w-4 h-4"
                  id={label}
                />
                <label
                  htmlFor={label}
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Typography variant="p" color="primary">
                    {label}
                  </Typography>
                </label>
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
      <CustomSelect
        placeholder="Massive Action"
        options={MassiveActionOptions}
      />
      <DataExportButton
        options={exportOptions}
        icon
        text="Export"
        className="border-white-4"
      />
    </div>
  );
};

export default NoOfStockFilters;
