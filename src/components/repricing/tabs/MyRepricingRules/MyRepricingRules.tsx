"use client";
import SearchComponent from "@/components/shared/SearchComponent";
import Typography from "@/components/ui/typography";
import React, { useState } from "react";
import ScrollArea from "@/components/shared/ScrollArea";
import Table from "@/components/shared/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import { Checkbox } from "@/components/ui/checkbox";
import * as Icons from "@/svg/Icons";
import TableBody from "@/components/shared/table/TableBody";
import clsx from "clsx";
import { EllipsisVertical, Eye, EyeOff, TriangleAlert } from "lucide-react";
import ActionsPopover from "@/components/shared/ActionsPopover";


const MyRepricingRules = () => {
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
    <div className="w-full bg-primary rounded-lg py-4 sm:py-5 px-3 sm:px-4 flex flex-col gap-5">
      {/* header */}
      <div className="w-full flex flex-wrap gap-2 justify-between items-center">
        <Typography variant="p" className="font-medium" color="primary">
          Create or edit your repricing rule
        </Typography>

        <SearchComponent size="w-full md:w-[250px] xl:w-[307px] h-[26px]" />
      </div>
      {/* table here */}
      <ScrollArea>
        <Table className="min-w-[1070px]">
          <TableHeader>
            <TableRow className="bg-[#252D33]">
              <TableCell as="th" className="">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={handleSelectAllChange}
                />
              </TableCell>
              {[
                "Rule Name",
                "Product",
                "Competitors",
                "Last Run",
                "Repricing Type",
                "Status",
                "Action",
              ].map((item: string, index: number) => (
                <TableCell as="th" key={index}>
                  <Typography variant="small" color="secondary">
                    {item}
                  </Typography>
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
                      <div className="flex justify-start items-center gap-2">
                        <Icons.dollar />
                        <Typography variant="small" color="secondary">
                          Reprice 1 cent below my cheapest competitor
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white-2">
                          <Typography variant="small" className="text-white-1">
                            All
                          </Typography>
                        </div>
                        <Typography color="secondary">Show</Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white-2">
                          <Typography variant="small" className="text-white-1">
                            All
                          </Typography>
                        </div>
                        <Typography color="secondary">Show</Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="flex justify-start items-center gap-2">
                        <TriangleAlert className="text-orange-1" size={18} />
                        <Typography color="secondary">6 Days ago</Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div
                        className={
                          "flex justify-start h-[26px] w-fit px-2 gap-1 items-center bg-[#00B62A1A] rounded-[80px]"
                        }
                      >
                        <Icons.dot
                          className="w-[3px] h-[4px]"
                          fill={"fill-[#00B62A]"}
                        />
                        <Typography
                          variant="small"
                          className={"text-[#00B62A]"}
                        >
                          Preview
                        </Typography>
                      </div>
                    </TableCell>

                    <TableCell as="td" className="">
                      <div
                        className={clsx(
                          "flex justify-start h-[26px] w-fit px-2 gap-1 items-center bg-[#00B62A1A] rounded-[80px]",
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
                        <Icons.loyality />
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
                              label: "Run Preview",
                              onClick: () => {},
                            },
                            {
                              label: "Delete",
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

export default MyRepricingRules;
