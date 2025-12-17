import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";
import ProductDetails from "./subs/ProductDetails";
import ProductsTable from "./subs/ProductsTable";

const ProductOveriew = () => {
  return (
    <div className="size-full flex flex-col items-start justify-start gap-5 lg:gap-8">
      <div className="w-full flex sm:flex-row flex-col gap-4 items-center justify-between">
        {" "}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/competitors/map-infringements">
                Map infringements
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Product Overview</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full rounded-lg bg-primary px-4 py-5 sm:py-6 flex flex-col items-center justify-start gap-4">
        <ProductDetails />
        <ProductsTable />
      </div>
    </div>
  );
};

export default ProductOveriew;
