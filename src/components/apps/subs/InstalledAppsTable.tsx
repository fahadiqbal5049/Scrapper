"use client";
import React, { useState } from "react";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import ScrollArea from "@/components/shared/ScrollArea";
import * as Icons from "@/svg/Icons";
import { Checkbox } from "@/components/ui/checkbox";
import clsx from "clsx";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { installedApps } from "@/data/appsData";

const InstalledAppsTable: React.FC = () => {
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
    <div className="w-full bg-primary rounded-lg flex flex-col gap-4 sm:px-6 px-4 py-5 sm:py-8">
      <Typography className="font-medium">Installed Apps</Typography>
      <ScrollArea>
        <Table className="min-w-[600px]">
          <TableHeader>
            <TableRow className="bg-[#252D33] h-[36px] !rounded-sm">
              {["App Name", "Status", "Action"].map((item, index) => {
                return (
                  <TableCell key={index} as="th">
                    <div
                      className={clsx(
                        "flex justify-start items-center gap-2",
                        index == 2 && "justify-end"
                      )}
                    >
                      {index == 0 && (
                        <Checkbox
                          checked={selectAll}
                          onCheckedChange={handleSelectAllChange}
                        />
                      )}
                      <Typography variant="small" color="secondary">
                        {item}
                      </Typography>
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
            {installedApps.map((item: any, index: number) => {
              return (
                <TableRow
                  key={index}
                  className={clsx(
                    index % 2 === 0 ? "bg-transparent" : "bg-[#343E46]"
                  )}
                >
                  <TableCell as="td" className="">
                    <div className="flex justify-start items-center gap-2">
                      <Checkbox
                        checked={selectedRows[index]}
                        onCheckedChange={(checked: boolean) =>
                          handleRowCheckboxChange(index, checked)
                        }
                      />
                      <Typography color="secondary">{item.name}</Typography>
                    </div>
                  </TableCell>

                  <TableCell as="td" className="">
                    <div
                      className={clsx(
                        "flex justify-end h-[22px] w-fit px-2 gap-1 items-center  rounded-[80px]",
                        item.status == "Trial Expired"
                          ? "bg-pink-1/15"
                          : "bg-[#00FBA033]"
                      )}
                    >
                      <Typography
                        variant="small"
                        className={clsx(
                          "text-[#00B62A]",
                          item.status == "Trial Expired" && "text-pink-1"
                        )}
                      >
                        {item.status}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell as="td" className="">
                    <div className="flex justify-end w-full gap-4 items-center">
                      <Button
                        variant={
                          item.status == "Trial Expired"
                            ? "orangeGradient"
                            : "gradientOutline"
                        }
                        className={clsx(
                          "h-[26px] w-[70px] font-normal text-xs",
                          item.status == "Up to Date" && "!text-orange-1"
                        )}
                      >
                        {item.status == "Trial Expired" ? "Buy Now" : "Open"}
                      </Button>
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

export default InstalledAppsTable;
