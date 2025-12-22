"use client";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import Typography from "@/components/ui/typography";
import { Filter } from "lucide-react";
import React, { useState } from "react";

const FiltersPopup = () => {
  return (
    <Popover>
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
        className="flex min-w-[260px] bg-secondary w-fit items-start border-transparent py-4 flex-col gap-3"
      >
        <div className="w-full flex justify-start items-center gap-2 border-b border-b-white-2 pb-2">
          <Checkbox className="size-[18px]" />
          <Typography variant="p" color="primary">
            Features Requests
          </Typography>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Checkbox className="size-[18px]" />
          <Typography variant="p" color="primary">
            Alerts
          </Typography>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Checkbox className="size-[18px]" />
          <Typography variant="p" color="primary">
            Filters
          </Typography>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Checkbox className="size-[18px]" />
          <Typography variant="p" color="primary">
            Scrapping
          </Typography>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Checkbox className="size-[18px]" />
          <Typography variant="p" color="primary">
            Onboarding
          </Typography>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Checkbox className="size-[18px]" />
          <Typography variant="p" color="primary">
            Import
          </Typography>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Checkbox className="size-[18px]" />
          <Typography variant="p" color="primary">
            Charts
          </Typography>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <Checkbox className="size-[18px]" />
          <Typography variant="p" color="primary">
            Export
          </Typography>
        </div>{" "}
        <div className="w-full flex justify-start items-center gap-2 border-t border-t-white-2 py-2">
          <Typography variant="p" color="primary">
            Show uncategorized posts
          </Typography>{" "}
          <Switch
            width="w-[30px]"
            height="14px"
            thumbHeight="h-2"
            thumbWidth="w-2"
            thumbStyles="data-[state=checked]:translate-x-4"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FiltersPopup;
