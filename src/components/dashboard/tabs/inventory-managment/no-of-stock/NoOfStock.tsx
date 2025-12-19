"use client";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import NoOfStockFilters from "./subs/NoOfStockFilters";
import ProductsTable from "./subs/ProductsTable";
const NoOfStock = () => {
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
            <BreadcrumbPage>No. of Stock</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
        <NoOfStockFilters />
      </div>
      <ProductsTable />
    </div>
  );
};

export default NoOfStock;
