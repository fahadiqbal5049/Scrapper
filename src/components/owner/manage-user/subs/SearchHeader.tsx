import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import SearchComponent from "@/components/shared/SearchComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import clsx from "clsx";
import AddNewUserDialog from "../modals/AddNewUserDialog";

interface Props {
  userState: string;
  setUserState: (a: string) => void;
}

const SearchHeader: React.FC<Props> = ({ userState, setUserState }: Props) => {
  const [showGenerateReports, setGenerateReports] = useState(false);

  return (
    <div className="w-full flex justify-between items-center gap-2 flex-wrap">
      <div className="flex items-center gap-2">
        <Typography variant="p" color="primary" className="font-semibold">
          Your Customer Data
        </Typography>
        <Typography
          variant="p"
          className="text-[#00B62A] bg-success-4/20 px-3 py-[1px] rounded-xl"
        >
          1,056
        </Typography>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <SearchComponent placeholder="Search" size="w-[200px] sm:w-[307px]" />
        <Button size="sm" className="rounded-sm" variant="outline">
          Delete All
        </Button>
      <AddNewUserDialog/>

        <Popover>
          <PopoverTrigger
            className="cursor-pointer border-[1px] border-white-4/80 rounded-sm"
            asChild
          >
            <div className="flex rounded-sm orange-gradient-border h-8 px-3 text-xs justify-center items-center gap-1">
              <Typography variant="p" className="text-white-1">
                {userState}
              </Typography>
              <ChevronDown size={20} className="text-white-1" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="flex min-w-[170px] bg-secondary rounded-sm w-fit items-start border-transparent p-2 flex-col gap-2"
          >
            <button
              onClick={() => setGenerateReports(!showGenerateReports)}
              className="text-sm w-full font-normal text-white-2 flex justify-between items-center"
            >
              <p>Generate Reports</p>
              <ChevronDown size={18} className="text-white-2" />
            </button>
            {showGenerateReports && (
              <div className="flex flex-col gap-2">
                {GenerateReportOptions.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox id={item} />
                      <label
                        className="text-sm font-normal text-white-2"
                        htmlFor={item}
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            )}
            <button
              className={clsx(
                " w-full flex justify-start rounded-sm py-1 px-1",
                userState === "User Access" && "bg-primary"
              )}
              onClick={() => setUserState("User Access")}
            >
              <Typography variant="p" color="primary">
                User Access
              </Typography>
            </button>
            <button
              className={clsx(
                " w-full flex justify-start rounded-sm py-1 px-1",
                userState === "Rejected User" && "bg-primary"
              )}
              onClick={() => setUserState("Rejected User")}
            >
              <Typography variant="p" color="primary">
                Rejected User
              </Typography>
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SearchHeader;

export const GenerateReportOptions = ["All Users", "Selected Users"];
