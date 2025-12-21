"use client";

import React, { useState } from "react";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import { Checkbox } from "@/components/ui/checkbox";
import ScrollArea from "@/components/shared/ScrollArea";
import clsx from "clsx";
import * as Icons from "@/svg/Icons";
import { Check } from "lucide-react";
import RemoveUserDialog from "../modals/RemoveUserDialog";

const UserAccessTable: React.FC = () => {
  // states ----->
  const [selectedRows, setSelectedRows] = useState(Array(12).fill(false));
  const [selectAll, setSelectAll] = useState(false);
  const [isVisible, setIsVisible] = useState(Array(6).fill(true));

  // functions -------->

  const toggleVisibility = (index: number) => {
    setIsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

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
    <ScrollArea>
      <Table className="min-w-[700px]">
        <TableHeader>
          <TableRow className="bg-[#252D33]">
            <TableCell as="th" className="w-[30px]">
              <Checkbox
                checked={selectAll}
                onCheckedChange={handleSelectAllChange}
              />
            </TableCell>
            {["User Name", "Email Address", "Permission"].map((item, index) => {
              return (
                <TableCell key={index} as="th">
                  <div className="flex justify-start items-center gap-1">
                    <p>{item}</p>
                    <Icons.sort
                      className="w-[14px] h-[14px]"
                      fill="fill-white-2"
                    />
                  </div>
                </TableCell>
              );
            })}
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
                    David Roger John
                  </TableCell>

                  <TableCell as="td" className="">
                    david.john@gmail.com
                  </TableCell>
                  <TableCell as="td" className="">
                    <div className="flex gap-4 items-center">
                      <button className="bg-success-1/10 hover:opacity-70 p-1 rounded-sm">
                        <Check size={20} className="text-success-1" />
                      </button>
                      <RemoveUserDialog />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default UserAccessTable;
