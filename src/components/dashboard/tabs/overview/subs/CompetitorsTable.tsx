"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import SearchComponent from "@/components/shared/SearchComponent";
import Link from "next/link";
import BasicInfoTable from "./BasicInfoTable";
import FullDetailsTable from "./FullDetailsTable";

const CompetitorsTable: React.FC = () => {
  const filterData = [
    "Competitors",
    "Competitive Products",
    "Same Priced Products",
    "Overpriced Products",
  ];

  // states ----->

  const [selectedOption, setSelectedOption] = useState(filterData[1]);

  return (
    <div className="w-full relative bg-primary p-4 gap-5 rounded-lg flex flex-col">
      {/* filter header -------> */}
      <div className="w-full flex xs:flex-row flex-col justify-between gap-4 xs:gap-3 items-center">
        <div className="flex flex-wrap justify-start items-center gap-3 xl:gap-5">
          {filterData.map((item, index) => {
            return (
              <button
                onClick={() => setSelectedOption(item)}
                key={index}
                className=""
              >
                <Typography
                  variant="p"
                  className={clsx(
                    selectedOption === item ? "font-medium" : "font-normal"
                  )}
                  color={
                    clsx(
                      selectedOption === item ? "default" : "primary"
                    ) as "default"
                  }
                >
                  {item}
                </Typography>
              </button>
            );
          })}
        </div>
        <SearchComponent />
      </div>

      {/* table ----------> */}

      {selectedOption === "Competitors" ? (
        <BasicInfoTable />
      ) : (
        <FullDetailsTable />
      )}

      <div className="w-full flex items-center justify-end">
        <Link
          href={"/"}
          className="text-[14px] font-normal bg-orange-text-gradient bg-clip-text text-transparent"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default CompetitorsTable;
