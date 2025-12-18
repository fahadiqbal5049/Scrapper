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
import {
  MassiveActionOptions,
  DiffOptions,
  SavedFilterOptions,
  ColumnCheckBoxses,
  ImportExportOptions,
  StatusOptions,
  StockOptions,
  CompetitorOptions,
  BrandOptions,
} from "@/data/competitorData";
import MonitoredUrlImportDialog from "./modals/MonitoredUrlImportDialog";
import DataExportPreferencesDialog from "@/components/shared/modals/DataExportPreferencesDialog";
import UpgradeDialog from "../../shared/modals/UpgradeDialog";
import { useCompetitorFilter } from "../context/context";

const MonitoredUrlFilter = () => {
  // states ------------->
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dialogName, setDialogName] = useState<string>("");
  const [isManual, setIsManual] = useState<boolean>(false);
  const {
    monitoredUrlFilterOptions,
    setMonitoredUrlFilterOptions,
    setMonitoredUrlFilterValue,
  } = useCompetitorFilter();

  // actions --------------->
  const handleManualChange = () => {
    setIsManual(!isManual);
  };
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChangeValue = (value: string, label: string) => {
    setMonitoredUrlFilterOptions((prevFilters) =>
      prevFilters.map((filter) =>
        filter.key === label ? { ...filter, value } : filter
      )
    );
  };

  const handleApplyFilter = () => {
    handleOpenChange();
    setMonitoredUrlFilterValue(monitoredUrlFilterOptions);
  };

  const handleRemoveAllFilter = () => {
    handleOpenChange();
    setMonitoredUrlFilterValue([]);
    const competitorOptions = monitoredUrlFilterOptions.map((item) => ({
      ...item,
      value: "",
    }));
    setMonitoredUrlFilterOptions(competitorOptions);
  };

  return (
    <div className="flex flex-wrap justify-start sm:justify-end items-center gap-4">
      {/* filters ---------->   */}
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
            value={monitoredUrlFilterOptions[0].value}
            onChange={(value) =>
              handleSelectChangeValue(value, "Saved Filter Set")
            }
            options={SavedFilterOptions}
          />
          <CustomSelect
            size="w-full"
            label="Competitor"
            onChange={(value) => handleSelectChangeValue(value, "Competitor")}
            value={monitoredUrlFilterOptions[1].value}
            options={CompetitorOptions}
          />
          <CustomSelect
            size="w-full"
            onChange={(value) => handleSelectChangeValue(value, "Brand")}
            value={monitoredUrlFilterOptions[2].value}
            label="Brand"
            options={BrandOptions}
          />
          <CustomSelect
            size="w-full"
            label="Stock"
            onChange={(value) => handleSelectChangeValue(value, "Stock")}
            value={monitoredUrlFilterOptions[3].value}
            options={StockOptions}
          />
          <CustomSelect
            size="w-full"
            onChange={(value) => handleSelectChangeValue(value, "Status")}
            value={monitoredUrlFilterOptions[4].value}
            label="Status"
            options={StatusOptions}
          />
          <CustomSelect
            size="w-full"
            onChange={(value) => handleSelectChangeValue(value, "Diff")}
            value={monitoredUrlFilterOptions[5].value}
            label="Diff"
            options={DiffOptions}
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
      <CustomSelect
        placeholder="Import/Export"
        options={ImportExportOptions}
        onChange={(value) => setDialogName(value)}
      />
      {/* import dialog */}

      <MonitoredUrlImportDialog
        dialogName={dialogName}
        setDialogName={setDialogName}
      />

      <DataExportPreferencesDialog
        dialogName={dialogName}
        setDialogName={() => setDialogName("")}
        isManual={isManual}
        handleManualChange={handleManualChange}
      />

      <UpgradeDialog
        isManual={isManual}
        handleManualChange={handleManualChange}
      />
    </div>
  );
};

export default MonitoredUrlFilter;
