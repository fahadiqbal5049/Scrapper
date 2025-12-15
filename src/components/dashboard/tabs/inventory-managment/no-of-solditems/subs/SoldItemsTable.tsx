"use client";
import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import TableCell from "@/components/shared/table/TableCell";
import TableRow from "@/components/shared/table/TableRow";
import ScrollArea from "@/components/shared/ScrollArea";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { Checkbox } from "@/components/ui/checkbox";
import clsx from "clsx";
import Image from "next/image";
import Table from "@/components/shared/table/Table";
import SearchComponent from "@/components/shared/SearchComponent";
import RangeCalender from "@/components/shared/RangeCalender/RangeCalender";
import * as Icons from "@/svg/Icons";

const SoldItemsTable = () => {
  const [selectedRows, setSelectedRows] = useState(Array(12).fill(false));
  const [selectAll, setSelectAll] = useState(false);

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
    <div className="w-full flex flex-col bg-primary rounded-lg px-3 sm:px-4 pt-4 pb-6 sm:pb-8 sm:pt-5 gap-5">
      <div className="w-full flex sm:flex-row flex-col gap-2 items-center sm:justify-between">
        <div className="z-20">
          <RangeCalender />
        </div>
        <SearchComponent size="sm:w-[300px] w-full h-[30px]" />
      </div>
      <ScrollArea>
        <Table className="min-w-[1050px]">
          <TableHeader>
            <TableRow className="bg-[#252D33] h-[34px] rounded-t-sm">
              <TableCell as="th" className="">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={handleSelectAllChange}
                />
              </TableCell>
              {[
                "Name",
                "Description",
                "Code",
                "Quantity",
                "Price",
                "Status",
              ].map((item: string, index: number) => (
                <TableCell key={index} as="th">
                  <div className="flex justify-start items-center gap-1">
                    <Typography variant="small" color="secondary">
                      {item}
                    </Typography>
                    <Icons.sort
                      className="w-[14px] h-[14px]"
                      fill="fill-white-2"
                    />
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array(12)
              .fill(0)
              .map((_, index) => {
                return (
                  <TableRow
                    key={index}
                    className={clsx(
                      index % 2 === 0 ? "bg-transparent" : "bg-[#343E46]"
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
                          width={37}
                          height={37}
                        />
                        <Typography color="secondary">Nike Flyknit </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">
                        Lorem Ipsum Dolor Sit Amet
                      </Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">123456789101</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">245</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">$45</Typography>
                    </TableCell>

                    <TableCell as="td" className="">
                      <div
                        className={clsx(
                          "flex justify-start w-fit px-2 gap-1 items-center bg-[#00B62A1A] rounded-[80px]"
                        )}
                      >
                        <Icons.dot
                          className="w-[3px] h-[4px]"
                          fill={"fill-[#00B62A]"}
                        />
                        <Typography className="text-[#00B62A] font-normal">
                          Active
                        </Typography>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default SoldItemsTable;
