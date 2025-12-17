import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { MarketPlaceOptions } from "@/data/competitorData";

const AddNewMarketplace = () => {
  return (
    <div className="size-full flex flex-col items-start justify-start gap-5 lg:gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/competitors/competitors-overview">Competitors</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Add Competitor</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full flex flex-col gap-4 sm:gap-6 bg-primary rounded-lg px-4 py-6">
        <div className="w-full flex gap-2 justify-between items-center">
          <div className="flex gap-1 flex-col">
            <Typography className="text-[20px] text-white-2 font-semibold">
              Add New Marketplace
            </Typography>
            <Typography variant="p" color="primary">
              Choose the type of marketplace and the country you want to start
              monitoring
            </Typography>
          </div>
          <Button variant="orangeGradient" size="sm" className="rounded-sm">
            Add
          </Button>
        </div>
        <div className="flex mt-1 sm:mt-4 flex-col gap-1">
          <Typography variant="text" color="primary">
            Select marketplace
          </Typography>
          <Typography variant="p" color="primary">
            Select which marketplace you want to start monitoring
          </Typography>
        </div>
        <CustomSelect options={MarketPlaceOptions} />
      </div>
    </div>
  );
};

export default AddNewMarketplace;
