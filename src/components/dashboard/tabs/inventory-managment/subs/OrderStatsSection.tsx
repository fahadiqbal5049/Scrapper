"use client";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import Typography from "@/components/ui/typography";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import SearchComponent from "@/components/shared/SearchComponent";
import ScrollArea from "@/components/shared/ScrollArea";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import clsx from "clsx";
import * as Icons from "@/svg/Icons";
import {
  filterOptions,
  purchasedOrderList,
} from "@/data/InventoryManagmentData";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter } from "lucide-react";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const OrderStatsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  };
  const pieChartData = [
    { name: "mobile", visitors: 10, fill: "#FB0078" },
    { name: "desktop", visitors: 90, fill: "#00FBA0" },
  ];
  const pieChartConfig = {
    visitors: {
      label: "Visitors",
    },
    mobile: {
      label: "mobile",
      color: "#FB0078",
    },
    paid: {
      label: "paid",
      color: "#00FBA0",
    },
  } satisfies ChartConfig;
  return (
    <div className="w-full flex flex-col items-center lg:grid lg:grid-cols-[325px,calc(100%-350px)] gap-6">
      <aside className="size-full flex flex-col items-center justify-start gap-4 sm:gap-6 bg-primary rounded-lg px-3 py-4 sm:py-5 sm:px-4">
        <div className="w-full flex justify-start items-center gap-1">
          <Typography color="primary" className="font-medium">
            Returns & Shipped Order
          </Typography>
          <InputHelpTooltip helperText={"Returns & Shipped Order"} />
        </div>
        <div className="w-full sm:mt-4 flex items-center justify-between">
          <span className="flex items-center justify-start gap-2">
            <span className="size-[10px] rounded-full bg-pink-1"></span>
            <Typography
              color="secondary"
              variant="small"
              className="font-medium"
            >
              Returns: 5%
            </Typography>
          </span>
          <span className="flex items-center justify-start gap-2">
            <span className="size-[10px] rounded-full bg-success-1"></span>
            <Typography
              color="secondary"
              variant="small"
              className="font-medium"
            >
              Shipped: 95%
            </Typography>
          </span>
        </div>{" "}
        <div className="w-[150px] h-[150px] bg-transparent rounded-full">
          <ChartContainer config={pieChartConfig} className="size-full">
            <PieChart width={150} height={150}>
              <Pie
                data={pieChartData}
                dataKey="visitors"
                nameKey="name"
                innerRadius={45}
                outerRadius={75}
                strokeWidth={2}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </aside>
      <aside className="size-full bg-primary rounded-lg py-4 sm:py-5 ">
        <div className="size-full flex flex-col items-start justify-start gap-4">
          <div className="w-full sm:px-4 px-3 flex items-center justify-between">
            <Typography color="primary" className="font-medium">
              Purchased Order List
            </Typography>
            <div className="flex items-center justify-start gap-2">
              <SearchComponent
                placeholder="Search"
                size="w-[160px] h-[26px]"
                bg="bg-[#3A4249]"
              />{" "}
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger
                  className="cursor-pointer border-[1px] border-white-4/80 rounded-sm h-[26px] px-2"
                  asChild
                >
                  <div className="flex justify-center items-center gap-1">
                    <Typography variant="small" color="primary">
                      Filters
                    </Typography>
                    <Filter size={11} color="#A3A3A3" />
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="flex min-w-[260px] bg-secondary w-fit items-start border-transparent p-4 flex-col gap-3"
                >
                  <CustomSelect
                    size="w-full"
                    label="Order Status"
                    options={filterOptions}
                  />

                  <div className="w-full mt-1 flex justify-between items-center">
                    <Button
                      variant="underline"
                      onClick={closePopup}
                      className="px-0 text-xs font-normal"
                    >
                      Clear
                    </Button>
                    <Button
                      variant="orangeGradient"
                      onClick={closePopup}
                      className="rounded-sm h-[26px] w-[60px] flex items-center justify-center text-xs font-normal"
                      size="sm"
                    >
                      Apply
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>{" "}
          <ScrollArea>
            <Table className="min-w-[700px]">
              <TableHeader>
                <TableRow className="bg-tertary h-[35px]">
                  {[
                    "Order Date",
                    "Purchase Order ID",
                    "Delivery Date",
                    "Order Amount",
                    "Order Status",
                  ].map((item: string, index: number) => (
                    <TableCell key={index} as="th" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        {" "}
                        <Typography
                          color="primary"
                          variant="small"
                          className="font-medium"
                        >
                          {item}
                        </Typography>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchasedOrderList.map((order, index) => (
                  <TableRow
                    key={index}
                    className={clsx(
                      " h-[35px]",
                      index % 2 === 0 ? " bg-[#343E46]" : "bg-transparent"
                    )}
                  >
                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        {" "}
                        <Typography
                          color="primary"
                          variant="small"
                          className="font-medium"
                        >
                          {order.date}
                        </Typography>
                      </div>
                    </TableCell>

                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        <Typography
                          color="primary"
                          variant="small"
                          className="font-medium"
                        >
                          {order.id}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        <Typography
                          color="primary"
                          variant="small"
                          className="font-medium"
                        >
                          {order.deliveryDate}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        <Typography
                          color="primary"
                          variant="small"
                          className="font-medium"
                        >
                          {order.amount}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div
                        className={clsx(
                          "flex justify-start w-fit px-2 gap-1 items-center bg-opacity-10 rounded-[80px]",
                          order.status == "On Hold"
                            ? "bg-pink-1"
                            : order.status == "Draft"
                            ? "bg-orange-3"
                            : order.status == "Closed"
                            ? "bg-cyan-2"
                            : "bg-success-2"
                        )}
                      >
                        <Icons.dot
                          className="w-[3px] h-[4px]"
                          fill={clsx(
                            order.status === "On Hold"
                              ? "fill-[#FB0078]"
                              : order.status === "Draft"
                              ? "fill-[#EB7301]"
                              : order.status === "Closed"
                              ? "fill-[#60B2FF]"
                              : "fill-[#00B62A]"
                          )}
                        />
                        <Typography
                          variant="small"
                          className={clsx(
                            "text-success-2",
                            order.status == "On Hold"
                              ? "text-pink-1"
                              : order.status == "Draft"
                              ? "text-orange-2"
                              : order.status == "Closed"
                              ? "text-cyan-2"
                              : ""
                          )}
                        >
                          {order.status}
                        </Typography>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
          <div className="w-full flex items-center justify-end px-3 sm:px-4">
            <Link
              href={"/dashboard/inventory-managment/purchased-orderlist"}
              className="bg-orange-gradient font-normal text-xs rounded-sm h-[26px] w-[60px] flex items-center justify-center"
            >
              <Typography variant="small">View All</Typography>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default OrderStatsSection;
