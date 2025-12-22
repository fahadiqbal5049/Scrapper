"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typography from "@/components/ui/typography";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const AllCategoriesPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] =
    useState<string>("All categories");
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <Popover open={isOpen} onOpenChange={toggleIsOpen}>
      <PopoverTrigger className="cursor-pointer" asChild>
        <div className="flex justify-center items-center gap-1">
          <Typography>{activeCategory}</Typography>
          <ChevronDown size={14} className="text-white-2" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="flex flex-col min-w-[130px] bg-secondary w-fit items-start border-transparent py-2 gap-2"
      >
        {categories.map((category: string, index: number) => (
          <button
            onClick={() => {
              setActiveCategory(category);
              toggleIsOpen();
            }}
            key={index}
          >
            <Typography color="primary">{category}</Typography>
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default AllCategoriesPopup;
const categories = [
  "All categories",
  "Alerts (3)",
  "Filters (12)",
  "Scrapping (11)",
  "Onboarding (0)",
  "Import (2)",
  "Charts (3)",
  "Export (9)",
];
