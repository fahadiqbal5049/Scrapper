import ScrollArea from "@/components/shared/ScrollArea";
import SearchComponent from "@/components/shared/SearchComponent";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import Typography from "@/components/ui/typography";
import { purchasedOrderList } from "@/data/InventoryManagmentData";
import clsx from "clsx";
import Table from "@/components/shared/table/Table";
import React from "react";
import * as Icons from "@/svg/Icons";
const PurchasedOrdersTable = () => {
  return (
    <div className="w-full bg-primary rounded-lg pt-4 pb-5 sm:pt-5 sm:pb-6 ">
      <div className="size-full flex flex-col items-start justify-start gap-4">
        <div className="w-full sm:px-4 px-3 flex items-center  gap-4 sm:flex-row flex-col sm:justify-between">
          <Typography color="primary" className="font-medium">
            Purchased Order List
          </Typography>
          <div className="flex items-center justify-start gap-2">
            <SearchComponent
              placeholder="Search"
              size="sm:w-[310px] w-full h-[30px]"
              bg="bg-[#3A4249]"
            />{" "}
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
                    "h-[35px]",
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
      </div>
    </div>
  );
};

export default PurchasedOrdersTable;
