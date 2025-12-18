"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import StatusFilterNode from "@/components/shared/StatusFilterNode";
import { useCompetitorFilter } from "@/components/competitors/context/context";

const FilterStatus: React.FC = () => {
  // states --------------->
  const {
    monitoredUrlFilterValue,
    setMonitoredUrlFilterValue,
    monitoredUrlFilterOptions,
    setMonitoredUrlFilterOptions,
  } = useCompetitorFilter();
  //   actions -------------->

  const handleRemoveFilter = (label: string) => {
    const updatedFilters = monitoredUrlFilterValue.filter(
      (item, i) => item.key !== label
    );
    setMonitoredUrlFilterValue(updatedFilters);
    const monitoredOptions = monitoredUrlFilterOptions.map((item) =>
      item.key === label ? { ...item, value: "" } : item
    );
    setMonitoredUrlFilterOptions(monitoredOptions);
  };

  const handleRemoveAllFilter = () => {
    setMonitoredUrlFilterValue([]);
    const competitorOptions = monitoredUrlFilterOptions.map((item) => ({
      ...item,
      value: "",
    }));
    setMonitoredUrlFilterOptions(competitorOptions);
  };

  return (
    <div className="w-full bg-primary rounded-lg py-2 px-3 min-h-[70px] flex sm:flex-row flex-col justify-start items-center gap-3">
      <Typography variant="p" className="text-white-1 font-medium">
        FILTERS
      </Typography>
      <hr className="border-r-[1px] sm:block hidden border-white-2/80 h-[20px]" />

      {/* current applied filter  */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
        {monitoredUrlFilterValue.map((filter, index: number) => {
          return (
            <StatusFilterNode
              key={index}
              filterType={filter.value}
              label={filter.key}
              onRemove={() => handleRemoveFilter(filter.key)}
            />
          );
        })}
      </div>
      {/* clear + save all filter  */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-2">
        {monitoredUrlFilterValue.length > 0 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={handleRemoveAllFilter}
              className="flex hover:opacity-80 justify-center items-center"
            >
              <Typography
                variant="small"
                className="text-white-1 whitespace-nowrap"
              >
                Clear all
              </Typography>
            </button>
            <hr className="border-r-[1px] border-white-2/80 h-[20px] sm:block hidden" />
          </div>
        )}
        <button className="flex hover:opacity-80 justify-center items-center">
          <Typography
            variant="small"
            className="text-white-1  break-all whitespace-nowrap"
          >
            Update filter Competitors Cheaper Than Me
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default FilterStatus;
