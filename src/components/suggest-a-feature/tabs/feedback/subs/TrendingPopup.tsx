"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typography from "@/components/ui/typography";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const TrendingPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <Popover open={isOpen} onOpenChange={toggleIsOpen}>
      <PopoverTrigger className="cursor-pointer" asChild>
        <div className="flex justify-center items-center gap-1">
          <Typography>Trending</Typography>
          <ChevronDown size={14} className="text-white-2" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="flex min-w-[230px] bg-secondary w-fit items-start border-transparent py-2 divide-x divide-white-2 gap-2"
      >
        <aside className="flex flex-col gap-2 pr-2">
          <Typography>Sort</Typography>
          <button
            onClick={toggleIsOpen}
            className="flex items-center justify-start gap-2"
          >
            <span className="size-[4px] rounded-full shrink-0 bg-white-2"></span>
            <Typography color="primary">Trending</Typography>
          </button>{" "}
          <button
            onClick={toggleIsOpen}
            className="flex items-center justify-start gap-2"
          >
            <span className="size-[4px] rounded-full shrink-0 bg-white-2 opacity-0"></span>
            <Typography color="primary">Top</Typography>
          </button>{" "}
          <button
            onClick={toggleIsOpen}
            className="flex items-center justify-start gap-2"
          >
            <span className="size-[4px] rounded-full shrink-0 bg-white-2 opacity-0"></span>
            <Typography color="primary">New</Typography>
          </button>{" "}
        </aside>
        <aside className="w-full flex flex-col items-start pl-2 gap-2">
          <Typography>Filter</Typography>
          <button onClick={toggleIsOpen}>
            <Typography color="primary">Under Review</Typography>
          </button>{" "}
          <button onClick={toggleIsOpen}>
            <Typography color="primary">Planned</Typography>{" "}
          </button>
          <button onClick={toggleIsOpen}>
            <Typography color="primary">In Progress</Typography>{" "}
          </button>
          <button onClick={toggleIsOpen}>
            <Typography color="primary">Planned</Typography>{" "}
          </button>
        </aside>
      </PopoverContent>
    </Popover>
  );
};

export default TrendingPopup;
