"use client";

import React, { useState } from "react";
import SearchHeader from "./subs/SearchHeader";
import Typography from "@/components/ui/typography";
import Table from "@/components/shared/table/Table";
import TableCell from "@/components/shared/table/TableCell";
import TableRow from "@/components/shared/table/TableRow";
import ScrollArea from "@/components/shared/ScrollArea";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { Checkbox } from "@/components/ui/checkbox";
import clsx from "clsx";
import Image from "next/image";
import * as Icons from "@/svg/Icons";
import ActionsPopover from "@/components/shared/ActionsPopover";
import { Eye, EyeOff, EllipsisVertical } from "lucide-react";

const AlertRule: React.FC = () => {
  // states ---------->
  const [selectedRows, setSelectedRows] = useState(Array(6).fill(false));
  const [selectAll, setSelectAll] = useState(false);
  const [isVisible, setIsVisible] = useState(Array(6).fill(true));

  // Actions -------------->
  const handleRowCheckboxChange = (index: number, checked: boolean) => {
    setSelectedRows((prevSelectedRows) => {
      const updatedRows = [...prevSelectedRows];
      updatedRows[index] = checked;

      setSelectAll(updatedRows.every((row) => row));

      return updatedRows;
    });
  };

  const toggleVisibility = (index: number) => {
    setIsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleSelectAllChange = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.map(() => !selectAll)
    );
  };

  return (
    <div className="w-full flex flex-col bg-primary rounded-lg px-3 sm:px-4 pt-4 pb-6 sm:pb-8 sm:pt-5 gap-5">
      {/* search header -----> */}
      <SearchHeader />
      {/* table ----> */}
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
                "Rule Name",
                "Competitors",
                "Alerts",
                "Latest Email Sent",
                "Updated At",
                "Status",
                "Action",
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
            {Array(6)
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
                      My competitors are 5% cheaper than me
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white-2">
                          <Typography variant="p" className="text-white-1">
                            All
                          </Typography>
                        </div>
                        <p>Show</p>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">View Alerts</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">Never</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">12 Hours ago</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div
                        className={clsx(
                          "flex justify-start w-fit px-2 gap-1 items-center bg-[#00B62A1A] rounded-[80px]",
                          !isVisible[index] && "bg-pink-1/15"
                        )}
                      >
                        <Icons.dot
                          className="w-[3px] h-[4px]"
                          fill={clsx(
                            "fill-[#00B62A]",
                            !isVisible[index] && "fill-[#FB0078]"
                          )}
                        />
                        <Typography
                          variant="p"
                          className={clsx(
                            "text-[#00B62A]",
                            !isVisible[index] && "text-pink-1"
                          )}
                        >
                          {isVisible[index] ? "Enabled" : "Disabled"}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="flex justify-start w-fit gap-4 items-center">
                        <button onClick={() => toggleVisibility(index)}>
                          {isVisible[index] ? (
                            <Eye color="#A3A3A3" size={20} />
                          ) : (
                            <EyeOff color="#A3A3A3" size={20} />
                          )}
                        </button>{" "}
                        <ActionsPopover
                          trigger={
                            <EllipsisVertical className="size-[20px] text-white-2 cursor-pointer" />
                          }
                          actions={[
                            {
                              label: "Edit",
                              onClick: () => {},
                            },
                            {
                              label: "Delete",
                              onClick: () => {},
                            },
                            {
                              label: "View Rule",
                              onClick: () => {},
                            },
                          ]}
                        />
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

export default AlertRule;
