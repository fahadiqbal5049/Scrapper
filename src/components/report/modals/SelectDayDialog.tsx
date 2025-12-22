"use client";
import { DialogFooter } from "@/components/ui/dialog";
import Typography from "@/components/ui/typography";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { CompetitorOptions } from "@/data/competitorData";

const SelectDayDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Sunday");

  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger>
        <span className="rounded-[2px] h-[29px] flex items-center justify-center border border-white-2 text-sm font-normal text-white-2 w-[46px]">
          Edit
        </span>
      </DialogTrigger>
      <DialogContent className="md:min-w-[530px] h-[540px] max-w-[90%] md:max-w-[530px] w-[90%] bg-primary border-none rounded-3xl">
        <DialogTitle></DialogTitle>
        <div className="size-full flex flex-col items-start justify-start gap-4">
          <Typography variant="text" className="font-medium">
            Select Day
          </Typography>
          <div className="w-full grid mb-4 grid-cols-2 gap-4 md:gap-6">
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((item: string, index: number) => (
              <Button
                className={clsx(
                  "h-[43px] text-sm  hover:text-white-1 hover:bg-tertary",
                  selectedDay == item
                    ? "text-white-1 font-medium bg-tertary"
                    : "bg-gray-2 text-white-2 font-normal"
                )}
                onClick={() => setSelectedDay(item)}
                key={index}
              >
                {item}
              </Button>
            ))}
          </div>
          <Typography variant="text" className="font-medium">
            Select Time
          </Typography>
          <div className="w-full flex items-center justify-start gap-3 sm:gap-4 flex-wrap">
            <div className="h-[29px] w-[72px] border-[0.5px] rounded-[2px] border-white-1 flex items-center justify-between gap-1 px-2">
              <input
                type="number"
                name="hours"
                id=""
                placeholder="10"
                className="size-full appearance-none focus:outline-none bg-transparent text-sm font-normal text-white-2"
              />
              <Typography color="primary">Hr</Typography>
            </div>{" "}
            <div className="h-[29px] w-[72px] border-[0.5px] rounded-[2px] border-white-1 flex items-center justify-between gap-1 px-2">
              <input
                type="number"
                name="mins"
                id=""
                placeholder="00"
                className="size-full appearance-none focus:outline-none bg-transparent text-sm font-normal text-white-2"
              />
              <Typography color="primary">Min</Typography>
            </div>{" "}
            <CustomSelect
              size="w-[80px] h-[29px]"
              triggerStyles="h-[29px] rounded-[2px]"
              label=""
              placeholder="AM"
              options={[
                { value: "AM", label: "AM" },
                { value: "PM", label: "PM" },
              ]}
            />
          </div>
        </div>

        <DialogFooter>
          <div className="w-full flex  items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={handleOpenChange}
              className="border-orange-2 text-orange-2 h-[26px] w-full sm:w-[100px] font-normal text-xs hover:bg-transparent hover:border-orange-2 hover:text-orange-2"
            >
              Cancel
            </Button>
            <Button
              onClick={handleOpenChange}
              className="bg-orange-gradient text-white-1 h-[26px] w-full sm:w-[100px] font-normal text-xs "
            >
              Save
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SelectDayDialog;
