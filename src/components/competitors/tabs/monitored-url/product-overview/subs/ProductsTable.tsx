"use client";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import React, { useState } from "react";
import MonitoredUrlsTable from "./MonitoredUrlsTable";
import ResellersTable from "./ResellersTable";

const ProductsTable = () => {
  const filterData = ["Monitored URL's", "Reseller"];
  const [selectedOption, setSelectedOption] = useState("Monitored URL's");
  return (
    <div className="w-full bg-gray-2 rounded-md px-4 py-5 flex flex-col  gap-4">
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
      {selectedOption === "Monitored URL's" ? (
        <MonitoredUrlsTable />
      ) : (
        <ResellersTable />
      )}
    </div>
  );
};

export default ProductsTable;
