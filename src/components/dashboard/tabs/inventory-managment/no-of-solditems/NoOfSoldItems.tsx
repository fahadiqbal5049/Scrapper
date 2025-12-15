import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";
import SoldItemsFilter from "./subs/SoldItemsFilter";
import SoldItemsTable from "./subs/SoldItemsTable";

const NoOfSoldItems = () => {
  return (
    <div className="size-full flex flex-col items-start justify-start gap-5 lg:gap-8">
      <div className="w-full flex sm:flex-row flex-col gap-4 items-center justify-between">
        {" "}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/dashboard/inventory-managment">
                Inventory Management
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>No. of Sold Items</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
        <SoldItemsFilter />
      </div>
      <SoldItemsTable />
    </div>
  );
};

export default NoOfSoldItems;
