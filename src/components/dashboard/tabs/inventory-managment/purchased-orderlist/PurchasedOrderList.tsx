import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import OrderListFilter from "./subs/OrderListFilter";
import PurchasedOrdersTable from "./subs/PurchasedOrdersTable";

const PurchasedOrderList = () => {
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
            <BreadcrumbPage>Purchased Order List</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
        <OrderListFilter />
      </div>
      <PurchasedOrdersTable />
    </div>
  );
};

export default PurchasedOrderList;
