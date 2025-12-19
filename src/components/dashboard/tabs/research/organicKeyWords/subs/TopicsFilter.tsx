"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const TopicsFilter: React.FC = () => {
  const [searchVolumne, setSearchVolumne] = useState("Most Valuable Keywords");

  return (
    <div className="w-full flex justify-center items-center flex-col">
      {/*  */}
      <div className="px-3 py-4 w-full">
        <Select onValueChange={setSearchVolumne}>
          <SelectTrigger className="flex w-full justify-start items-center gap-2 border-[1px] rounded-[2px] border-[#4E4E4E]">
            <Typography variant="p" color="primary">
              Group By: {searchVolumne}
            </Typography>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {SearchVolumneOptions.map((opt, index) => {
                return (
                  <SelectItem key={index} value={opt}>
                    {opt}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <hr className="w-full border-[#4E4E4E]" />
      <Typography variant="p" className="font-semibold py-4" color="primary">
        All Keyword
      </Typography>
      <Accordion type="single" collapsible className="w-full">
        {Array(5)
          .fill(0)
          .map((item, index) => {
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger
                  className={clsx(
                    "w-full px-3",
                    index === 0 && "border-t-[1px] border-[#4E4E4E]"
                  )}
                >
                  <div className="w-full flex justify-between items-center">
                    <p>nike</p>
                    <p>7.24M</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10 pr-2 flex flex-col gap-2">
                  {KeyWordStats.map((stats, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex justify-between items-center"
                      >
                        <Typography variant="p" color="primary">
                          {stats.type}
                        </Typography>
                        <Typography variant="p" color="primary">
                          {stats.value}
                        </Typography>
                      </div>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
      <div className="w-full pt-3 pb-6 px-3">
        <button className="w-full gap-1 py-3 flex justify-center items-center border-[1px] border-[#4E4E4E] rounded-sm">
          <ChevronDown size={22} color="#F1F1F1" />
          <Typography variant="p" className="text-[#F1F1F1] font-semibold">
            View All Topics
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default TopicsFilter;

const SearchVolumneOptions = ["Search Volumne", "Keyword Count"];

const KeyWordStats = [
  {
    type: "air max",
    value: "676k",
  },
  {
    type: "blazer",
    value: "487k",
  },
  {
    type: "nike shoes",
    value: "247k",
  },
  {
    type: "nike sb",
    value: "186k",
  },
  {
    type: "dunk",
    value: "173k",
  },
  {
    type: "white",
    value: "83.3k",
  },
  {
    type: "2",
    value: "45.2k",
  },
  {
    type: "air mag",
    value: "38.4k",
  },
];
