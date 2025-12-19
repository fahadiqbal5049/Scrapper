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
import { MassiveActionOptions } from "@/data/competitorData";
import { CompetitorOptions } from "@/data/competitorData";
import { StatusOptions } from "@/data/competitorData";
import AddCompetitors from "./modals/AddCompetitors";
import { useCompetitorFilter } from "../context/context";

const CompetitorFilter = () => {
  // states --------->
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    competitorFilterOptions,
    setCompetitorFilterOptions,
    setCompetitorSelectedFilter,
  } = useCompetitorFilter();

  // actions ----------->
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChangeValue = (value: string, label: string) => {
    setCompetitorFilterOptions((prevFilters) =>
      prevFilters.map((filter) =>
        filter.key === label ? { ...filter, value } : filter
      )
    );
  };

  const handleApplyFilter = () => {
    handleOpenChange();
    setCompetitorSelectedFilter(competitorFilterOptions);
  };

  const handleRemoveAllFilter = () => {
    handleOpenChange();
    setCompetitorSelectedFilter([]);
    const competitorOptions = competitorFilterOptions.map((item) => ({
      ...item,
      value: "",
    }));
    setCompetitorFilterOptions(competitorOptions);
  };

  return (
    <div className="flex flex-wrap justify-start sm:justify-end items-center gap-4">
      {/* filters ---------->   */}
      <Popover open={isOpen} onOpenChange={handleOpenChange}>
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
          className="flex min-w-[230px] bg-secondary w-fit items-start border-transparent p-4 flex-col gap-3"
        >
          {/* competitor domain select ----> */}
          <CustomSelect
            size="w-full"
            label="Competitor Domain"
            value={competitorFilterOptions[0].value}
            onChange={(value) =>
              handleSelectChangeValue(value, "Competitor Domain")
            }
            options={CompetitorOptions}
          />
          {/* competitor status select ----> */}
          <CustomSelect
            size="w-full"
            label="Competitor Status"
            value={competitorFilterOptions[1].value}
            onChange={(value) =>
              handleSelectChangeValue(value, "Competitor Status")
            }
            options={StatusOptions}
          />
          <div className="w-full mt-1 flex justify-between items-center">
            <Button
              onClick={handleRemoveAllFilter}
              variant="underline"
              className="px-0"
            >
              Clear
            </Button>
            <Button
              onClick={handleApplyFilter}
              variant="orangeGradient"
              className="rounded-sm"
              size="sm"
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      {/* massive action -------->   */}
      <CustomSelect
        placeholder="Massive Action"
        options={MassiveActionOptions}
      />
      {/* add new competitors modal ----->  */}
      <AddCompetitors />
    </div>
  );
};

export default CompetitorFilter;
