"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { Filter, ChevronDown } from "lucide-react";
import {
  MatchedOptions,
  BrandOptions,
  StatusOptions,
  ProductPerPageOptions,
  ColumnCheckBoxsesData,
} from "@/data/myCatalog";
import { CloudUpload } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { usePathname } from "next/navigation";
import ExportCatalog from "../modals/ExportCatalogDialog";
import ImportNewProductDialog from "../modals/ImportNewProductDialog";


const FilterSection: React.FC = () => {
  // stats --------->
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isColumnFilterOpen, setIsColumnFilterOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const [isExportCataglogDialog, setExportCatalogDailog] = useState(false);

  // actions ------------>

  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-start sm:justify-end items-center gap-4">
        {/* filter ---------->   */}
        <Popover onOpenChange={handleOpenChange} open={isOpen}>
          <PopoverTrigger
            className="cursor-pointer border-[1px] border-white-4/80 rounded-sm h-9 px-2"
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
            className="flex min-w-[260px] bg-secondary w-fit items-start border-transparent p-4 flex-col gap-3"
          >
            <CustomSelect
              size="w-full"
              label="Status"
              options={StatusOptions}
            />
            <CustomSelect
              size="w-full"
              label="Matched"
              options={MatchedOptions}
            />
            <CustomSelect size="w-full" label="Brand" options={BrandOptions} />

            <div className="w-full mt-1 flex justify-between items-center">
              <Button
                onClick={handleOpenChange}
                variant="underline"
                className="px-0"
              >
                Clear
              </Button>
              <Button
                onClick={handleOpenChange}
                variant="orangeGradient"
                className="rounded-sm"
                size="sm"
              >
                Apply
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        {/* column -------> */}
        <Popover
          open={isColumnFilterOpen}
          onOpenChange={() => setIsColumnFilterOpen(!isColumnFilterOpen)}
        >
          <PopoverTrigger
            className="cursor-pointer border-[1px] border-white-4/80 rounded-sm min-h-9 px-2"
            asChild
          >
            <div className="flex justify-center items-center gap-1">
              <Typography variant="p" color="primary">
                Columns
              </Typography>
              <ChevronDown size={16} color="#A3A3A3" />
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" className="min-w-[550px] p-0 bg-[#1E252B] border-[1px] flex flex-col border-[#535353] shadow-lg rounded-lg">
            {/* popover footer */}
            <div className="w-full border-b-[1px] border-white-2 py-3 bg-transparent flex justify-center items-center">
              <Typography variant="p" className="text-white-1 font-normal">
                Catalog View Options
              </Typography>
            </div>
            <div className="w-full grid border-b-[1px] border-white-2 grid-cols-2">
              {/* 1st col  */}
              <div className="w-full py-5 px-5 border-r-[1px] border-white-2 flex flex-col gap-3">
                <Typography variant="p" className="font-medium" color="primary">
                  Product per page
                </Typography>
                <CustomSelect
                  triggerStyles="h-[40px] border-white-2"
                  options={ProductPerPageOptions}
                  placeholder="15"
                />
              </div>
              {/* 2nd col  */}
              <div className="w-full py-5 px-5 flex flex-col gap-3">
                <Typography variant="p" className="font-medium" color="primary">
                  Enable, disable and sort columns
                </Typography>
                {ColumnCheckBoxsesData.map((label, index) => {
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
              </div>
            </div>
            {/* dialog footer  */}
            <div className="w-full py-3 flex justify-between items-center px-5">
              <Button
                onClick={() => setIsColumnFilterOpen(!isColumnFilterOpen)}
                variant="outline"
                className="border-white-2"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsColumnFilterOpen(!isColumnFilterOpen)}
                variant="orangeGradient"
              >
                Save
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        {/*  */}
        {pathName === "/my-catalog/product-catalog" && (
           <ImportNewProductDialog/>
        )}
        <Button
          onClick={() => setExportCatalogDailog(!isExportCataglogDialog)}
          variant="outline"
          className="gap-2 min-h-9 border-white-4/80"
          color="#A3A3A3"
        >
          Export
        </Button>
      </div>
      <ExportCatalog
        open={isExportCataglogDialog}
        setIsopen={() => setExportCatalogDailog(false)}
      />
    </React.Fragment>
  );
};

export default FilterSection;
