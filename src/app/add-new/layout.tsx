import React from "react";
import Typography from "@/components/ui/typography";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addColumnData } from "@/data/addNew";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const layout = ({ children }: any) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex mb-4 sm:mb-6 justify-between items-center gap-2 flex-wrap">
        <Typography variant="p" className="text-white-4 font-medium">
          Adding your new products
        </Typography>
        <Popover>
          <PopoverTrigger
            className="cursor-pointer border-[1px] border-white-4/80 rounded-sm h-9 px-2"
            asChild
          >
            <div className="flex justify-center items-center gap-1">
              <Typography variant="p" color="primary">
                Add Column
              </Typography>
              <ChevronDown size={16} color="#A3A3A3" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="flex min-w-[300px] bg-secondary w-fit items-start border-transparent p-4 flex-col gap-3"
          >
            {addColumnData.map((label, index) => {
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
      </div>
      {children}
    </div>
  );
};

export default layout;
