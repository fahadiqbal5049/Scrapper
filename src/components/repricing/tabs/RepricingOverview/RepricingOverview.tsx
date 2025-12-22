"use client";
import ScrollArea from "@/components/shared/ScrollArea";
import SearchComponent from "@/components/shared/SearchComponent";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import Table from "@/components/shared/table/Table";
import React, { useState } from "react";
import * as Icons from "@/svg/Icons";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { RepricingProducts } from "@/data/repricingData";
const RepricingOverview = () => {
  // states ----->

  const [selectedRows, setSelectedRows] = useState(Array(6).fill(false));
  const [selectAll, setSelectAll] = useState(false);

  // functions -------->

  const handleRowCheckboxChange = (index: number, checked: boolean) => {
    setSelectedRows((prevSelectedRows) => {
      const updatedRows = [...prevSelectedRows];
      updatedRows[index] = checked;

      setSelectAll(updatedRows.every((row) => row));

      return updatedRows;
    });
  };

  const handleSelectAllChange = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.map(() => !selectAll)
    );
  };
  return (
    <div className="w-full bg-primary rounded-lg pt-4 pb-5 sm:pt-5 sm:pb-6 sm:px-4 px-3 ">
      <div className="size-full flex flex-col items-start justify-start gap-5">
        <div className="w-full flex items-center  gap-4 sm:flex-row flex-col sm:justify-between">
          <Typography color="primary" className="font-medium">
            See how to adjust your prices based on your repricing rules
          </Typography>
          <div className="flex items-center justify-start gap-2">
            <SearchComponent
              placeholder="Search"
              size="sm:w-[310px] w-full h-[26px]"
              bg="bg-[#3A4249]"
            />{" "}
          </div>
        </div>
        <ScrollArea>
          <Table className="min-w-[1100px]">
            <TableHeader>
              <TableRow className="bg-tertary h-[35px]">
                <TableCell as="th" className="">
                  <Checkbox
                    checked={selectAll}
                    onCheckedChange={handleSelectAllChange}
                  />
                </TableCell>
                {[
                  "Product Name",
                  "Price",
                  "Cost",
                  "Markup",
                  "New Price",
                  "Min/Max Price",
                  "Competitor Prices",
                  "Triggered Rule",
                  "Status",
                ].map((item: string, index: number) => (
                  <TableCell key={index} as="th" className="">
                    <Typography
                      color="primary"
                      variant="small"
                      className="font-medium"
                    >
                      {item}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {RepricingProducts.map((order, index) => (
                <TableRow
                  key={index}
                  className={clsx(
                    "h-[35px]",
                    index % 2 === 0 ? "bg-transparent " : " bg-[#343E46]"
                  )}
                >
                  <TableCell as="td" className="">
                    <Checkbox
                      checked={selectedRows[index]}
                      onCheckedChange={(checked: boolean) =>
                        handleRowCheckboxChange(index, checked)
                      }
                    />
                  </TableCell>
                  <TableCell as="td" className="">
                    <div className="flex justify-start items-center gap-2">
                      <Image
                        src="/products/shoes.svg"
                        className="object-cover rounded-sm"
                        alt=""
                        width={36}
                        height={36}
                      />
                      <Typography color="secondary">Nike Flyknit </Typography>
                    </div>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Typography color="secondary">$50</Typography>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Typography color="secondary">$30</Typography>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Typography color="secondary">$20</Typography>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Typography color="secondary">$48</Typography>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Typography color="secondary">$30-$48</Typography>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Typography color="secondary">$49</Typography>
                  </TableCell>
                  <TableCell as="td" className="">
                    <div className="size-full flex items-center justify-start gap-2">
                      <Icons.dollar />
                      <Typography color="secondary">
                        Reprice 1 cent below my cheapest competitor
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell as="td" className="">
                    <div
                      className={clsx(
                        "flex justify-start w-fit px-2 gap-1 items-center bg-opacity-10 rounded-[80px]",
                        order.status == "Disabled"
                          ? "bg-pink-1"
                          : order.status == "In Progress"
                          ? "bg-orange-3"
                          : order.status == "Executed"
                          ? "bg-cyan-2"
                          : "bg-success-2"
                      )}
                    >
                      <Icons.dot
                        className="w-[3px] h-[4px]"
                        fill={clsx(
                          order.status === "Disabled"
                            ? "fill-[#FB0078]"
                            : order.status === "In Progress"
                            ? "fill-[#EB7301]"
                            : order.status === "Executed"
                            ? "fill-[#60B2FF]"
                            : "fill-[#00B62A]"
                        )}
                      />
                      <Typography
                        variant="small"
                        className={clsx(
                          "text-success-2",
                          order.status == "Disabled"
                            ? "text-pink-1"
                            : order.status == "In Progress"
                            ? "text-orange-2"
                            : order.status == "Executed"
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

export default RepricingOverview;
