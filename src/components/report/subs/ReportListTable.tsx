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
import ActionsPopover from "@/components/shared/ActionsPopover";
import Typography from "@/components/ui/typography";
import { EllipsisVertical, Eye, EyeOff } from "lucide-react";
import SearchComponent from "@/components/shared/SearchComponent";

const ReportListTable: React.FC = () => {
  // states ----->
  const [isVisible, setIsVisible] = useState(Array(6).fill(true));
  const [selectedRows, setSelectedRows] = useState(Array(6).fill(false));
  const [selectAll, setSelectAll] = useState(false);

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
    <div className="w-full bg-primary rounded-lg px-3 pb-3 sm:px-4 flex flex-col gap-2">
      <div className="w-full flex flex-wrap gap-2 justify-between items-center py-4">
        <Typography variant="p" className="font-medium" color="secondary">
          Report List
        </Typography>

        <SearchComponent
          size="w-[200px] md:w-[250px] xl:w-[307px] h-[26px]"
          bg="bg-white-3/5"
        />
      </div>{" "}
      <ScrollArea>
        <Table className="min-w-[1000px]">
          <TableHeader>
            <TableRow className="bg-[#252D33]">
              <TableCell as="th" className="">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={handleSelectAllChange}
                />
              </TableCell>
              {[
                "Name",
                "Type",
                "Frequency",
                "External Link",
                "Last Run",
                "Status",
                "Action",
              ].map((item, index) => {
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
            {Array(4)
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
                      <Typography color="secondary">
                        Competitors Cheaper Than Me
                      </Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">
                        {`Excel (send report)`}
                      </Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">Weekly</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div
                        className={
                          "flex justify-start w-[74px] px-2 h-[26px] gap-1 items-center bg-white-2/10 rounded-[80px]"
                        }
                      >
                        <Icons.dot
                          className="w-[3px] h-[4px]"
                          fill={"fill-[#E2E2E2]"}
                        />
                        <Typography variant="small" color="primary">
                          Disabled
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">5 days ago</Typography>
                    </TableCell>

                    <TableCell as="td" className="">
                      <div
                        className={clsx(
                          "flex justify-start w-[74px] h-[26px] px-2 gap-1 items-center bg-[#00B62A1A] rounded-[80px]",
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
                          variant="small"
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
                        </button>
                        <ActionsPopover
                          className="w-[140px]"
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
                              label: "View Report",
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

export default ReportListTable;
