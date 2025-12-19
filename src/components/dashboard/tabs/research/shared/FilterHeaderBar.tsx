"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  SortOptions,
  ColumnDefaultData,
} from "@/data/organicKeyWords";
import ToggleButtonGroup from "@/components/shared/ToggleButtonGroup";
import { FilterModeOptions } from "@/data/organicKeyWords";
import DataExportButton from "@/components/shared/DataExportButton";

interface Props {
  currentPage?: string;
}

const FilterBar: React.FC<Props> = ({
  currentPage = "Organic Keywords",
}: Props) => {
  const [sortValue, setSortValue] = useState("Most Valuable Keywords");
  const [filterMode, setFilterMode] = React.useState("default");

  return (
    <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between items-start lg:items-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/dashboard/research">Research</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-wrap justify-start xs:justify-center items-center gap-3 xs:gap-4">
        {/* sorting filter ----> */}
        <Select onValueChange={setSortValue}>
          <SelectTrigger className="flex justify-center items-center gap-2 border-[1px] border-white-2 rounded-sm">
            <Typography variant="p" color="primary">
              Sort: {sortValue}
            </Typography>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {SortOptions.map((opt, index) => {
                return (
                  <SelectItem key={index} value={opt}>
                    {opt}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* column filter ------> */}
        <Popover>
          <PopoverTrigger className="flex h-9 px-2 justify-center items-center gap-2 border-[1px] border-white-2 rounded-sm">
            <Typography variant="p" color="primary">
              Columns
            </Typography>
            <ChevronDown color="#A3A3A3" className="h-4 w-4" />
          </PopoverTrigger>
          <PopoverContent
            align="center"
            className="rounded-lg mt-2 z-40 bg-secondary shadow-xl mr-4 flex flex-col w-[300px]"
          >
            {/* custom + default tabs ------> */}
            <ToggleButtonGroup
              options={FilterModeOptions}
              value={filterMode}
              onChange={setFilterMode}
            />
            {/* content  */}
            {filterMode === "default" ? (
              <div className="w-full gap-5 h-full flex flex-col p-3">
                {/* check boxses --->  */}
                <div className="flex gap-3 select-none flex-col">
                  {ColumnDefaultData.checkBoxes.map((label, index) => {
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
                </div>
                {/* radio boxes ----> */}
                <div className="w-full grid grid-cols-2 gap-3">
                  {/* 1) cost */}
                  <div className="flex flex-col gap-2">
                    <Typography variant="p" color="primary">
                      Cost
                    </Typography>
                    <RadioGroup defaultValue="Broad">
                      {ColumnDefaultData.cost.map((label, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={label} id={label} />
                            <label htmlFor={label}>
                              <Typography variant="p" color="primary">
                                {label}
                              </Typography>
                            </label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                  {/* 1) CPC */}
                  <div className="flex flex-col gap-2">
                    <Typography variant="p" color="primary">
                      CPC
                    </Typography>
                    <RadioGroup defaultValue="Broad">
                      {ColumnDefaultData.cpc.map((label, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={label} id={label} />
                            <label htmlFor={label}>
                              <Typography variant="p" color="primary">
                                {label}
                              </Typography>
                            </label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full"></div>
            )}
          </PopoverContent>
        </Popover>
        {/* export options ------> */}
        <DataExportButton />
      </div>
    </div>
  );
};

export default FilterBar;
