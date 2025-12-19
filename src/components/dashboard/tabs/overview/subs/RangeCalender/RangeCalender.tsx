"use client";

import React, { useState } from "react";
import * as Icons from "@/svg/Icons";
import Typography from "@/components/ui/typography";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";
import WeeklyRangeCalender from "./subs/WeeklyRangeCalender";
import MonthlyRangeCalender from "./subs/MonthlyRangeCalender";
import YearlyRangeCalender from "./subs/YearlyRangeCalender";
import "./subs/RangeCalender.css";
import { DateObject } from "react-multi-date-picker";

interface RangeValue {
  weeklyRange: DateObject[];
  monthlyRange: DateObject[];
  yearlyRange: DateObject[];
}

const RangeCalender: React.FC = () => {
  const [rangeType, setRangeType] = useState<"weekly" | "monthly" | "yearly">(
    "weekly"
  );
  const [isOpen, setIsOpen] = useState(false);

  // Initialize with proper type checking
  const [rangeValues, setRangeValues] = useState<RangeValue>({
    weeklyRange: [
      new DateObject().subtract(4, "days"),
      new DateObject().add(4, "days"),
    ],
    monthlyRange: [
      new DateObject().subtract(1, "month"),
      new DateObject().add(1, "month"),
    ],
    yearlyRange: [
      new DateObject().subtract(1, "year"),
      new DateObject().add(1, "year"),
    ],
  });

  const formatTriggerDate = () => {
    try {
      let currentRange: DateObject[] = [];

      // Safely get the current range based on type
      switch (rangeType) {
        case "weekly":
          currentRange = rangeValues.weeklyRange;
          break;
        case "monthly":
          currentRange = rangeValues.monthlyRange;
          break;
        case "yearly":
          currentRange = rangeValues.yearlyRange;
          break;
      }

      // Validate that we have a valid range with two dates
      if (
        !Array.isArray(currentRange) ||
        currentRange.length < 2 ||
        !currentRange[0]?.format ||
        !currentRange[1]?.format
      ) {
        return "Select Date Range";
      }

      // Format based on range type
      switch (rangeType) {
        case "weekly":
          return `${currentRange[0].format(
            "MMM DD"
          )} - ${currentRange[1].format("DD")}, ${currentRange[1].format(
            "YY"
          )}`;
        case "monthly":
          return `${currentRange[0].format(
            "MMM YYYY"
          )} - ${currentRange[1].format("MMM YYYY")}`;
        case "yearly":
          return `${currentRange[0].format("YYYY")} - ${currentRange[1].format(
            "YYYY"
          )}`;
        default:
          return "Select Date Range";
      }
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Select Date Range";
    }
  };

  const handleWeeklyChange = (newRange: DateObject[]) => {
    if (Array.isArray(newRange) && newRange.length === 2) {
      setRangeValues((prev) => ({ ...prev, weeklyRange: newRange }));
    }
  };

  const handleMonthlyChange = (newRange: DateObject[]) => {
    if (Array.isArray(newRange) && newRange.length === 2) {
      setRangeValues((prev) => ({ ...prev, monthlyRange: newRange }));
    }
  };

  const handleYearlyChange = (newRange: DateObject[]) => {
    if (Array.isArray(newRange) && newRange.length === 2) {
      setRangeValues((prev) => ({ ...prev, yearlyRange: newRange }));
    }
  };

  const handleRangeTypeClick = (type: "weekly" | "monthly" | "yearly") => {
    setRangeType(type);
    setIsOpen(true);
  };

  const CalendarComponents: Record<string, React.FC> = {
    weekly: () => (
      <WeeklyRangeCalender
        isOpen={rangeType === "weekly" && isOpen}
        value={rangeValues.weeklyRange}
        onChange={handleWeeklyChange}
      />
    ),
    monthly: () => (
      <MonthlyRangeCalender
        isOpen={rangeType === "monthly" && isOpen}
        value={rangeValues.monthlyRange}
        onChange={handleMonthlyChange}
      />
    ),
    yearly: () => (
      <YearlyRangeCalender
        isOpen={rangeType === "yearly" && isOpen}
        value={rangeValues.yearlyRange}
        onChange={handleYearlyChange}
      />
    ),
  };

  const SelectedCalendar = CalendarComponents[rangeType];

  return (
    <div className="flex select-none">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <span className="flex justify-center border-[1px] rounded-sm border-white-2 px-2 py-1 items-center gap-2">
            <Icons.calender
              className="w-[17px] h-[20px]"
              stroke="stroke-white-2"
            />
            <Typography variant="p" color="primary">
              {formatTriggerDate()}
            </Typography>
            <ChevronDown size={14} color="#A3A3A3" />
          </span>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="grid rounded-md shadow-xl grid-cols-[100px,40px,1fr] border-0 w-full max-w-[530px] min-h-[380px] py-0 px-3 bg-secondary"
        >
          <div className="w-full py-3 select-none flex gap-4 flex-col items-start justify-start">
            {RangeOptions.map((item, index) => (
              <button
                onClick={() =>
                  handleRangeTypeClick(item as "weekly" | "monthly" | "yearly")
                }
                className={clsx(
                  item === rangeType ? "bg-pink-1/10" : "bg-transparent",
                  "px-2 py-1 transition-all duration-100 rounded-sm"
                )}
                key={index}
              >
                <Typography
                  variant="p"
                  color={
                    clsx(item === rangeType ? "pink" : "primary") as "primary"
                  }
                  className={clsx(
                    "capitalize",
                    item === rangeType ? "font-medium" : "font-normal"
                  )}
                >
                  {item}
                </Typography>
              </button>
            ))}
          </div>
          <div className="w-[1px] mx-auto h-full bg-white-2"></div>
          {SelectedCalendar && <SelectedCalendar />}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default RangeCalender;

const RangeOptions = ["weekly", "monthly", "yearly"] as const;
