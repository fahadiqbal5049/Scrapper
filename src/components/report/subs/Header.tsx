"use client";
import CustomSelect from "@/components/shared/form/CustomSelect";
import Typography from "@/components/ui/typography";
import {
  SavedFilterOptions,
  CompetitorOptions,
  StockOptions,
  StatusOptions,
  DiffOptions,
} from "@/data/competitorData";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Filter, Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex items-center justify-between gap-4 flex-col sm:flex-row">
      <Typography className="font-medium">
        Showing reports from your database
      </Typography>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Popover onOpenChange={handleOpenChange} open={isOpen}>
          <PopoverTrigger
            className="cursor-pointer border-[1px] border-white-4/80 rounded-sm h-[38px] px-2"
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
              label="Type"
              options={CompetitorOptions}
            />
            <CustomSelect
              size="w-full"
              label="Frequency"
              options={CompetitorOptions}
            />
            <CustomSelect
              size="w-full"
              label="Last Run"
              options={StockOptions}
            />
            <CustomSelect
              size="w-full"
              label="Status"
              options={StatusOptions}
            />

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
        </Popover>{" "}
        <Button
          variant="iconOutline"
          className="border-[1px] border-white-4/80"
          icon={<Plus />}
          iconPosition="left"
          onClick={() => router.push("/reports/add-new-report")}
        >
          Add New Report
        </Button>
      </div>
    </div>
  );
};

export default Header;
