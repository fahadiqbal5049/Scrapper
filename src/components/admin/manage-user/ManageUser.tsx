"use client";

import React, { useState } from "react";
import SearchHeader from "./subs/SearchHeader";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import * as Icons from "@/svg/Icons";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import { Checkbox } from "@/components/ui/checkbox";
import ScrollArea from "@/components/shared/ScrollArea";
import { Eye, EyeOff } from "lucide-react";
import BasicPagination from "@/components/shared/BasicPagination";
import Link from "next/link";

const ManageUser: React.FC = () => {
  // states ----->
  const [selectedRows, setSelectedRows] = useState(Array(12).fill(false));
  const [selectAll, setSelectAll] = useState(false);
  const [isVisible, setIsVisible] = useState(Array(6).fill(true));

  // for pagination ------->
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 50;

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

  // Actions ----------------->
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full gap-5 bg-primary rounded-lg p-4 flex flex-col">
        <SearchHeader />
        <ScrollArea>
          <Table className="min-w-[900px]">
            <TableHeader>
              <TableRow className="bg-[#252D33]">
                <TableCell as="th" className="">
                  <Checkbox
                    checked={selectAll}
                    onCheckedChange={handleSelectAllChange}
                  />
                </TableCell>
                {["User Name", "Email Address", "Role", "Status", "Action"].map(
                  (item, index) => {
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
                  }
                )}
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
                        User
                      </TableCell>
                      <TableCell as="td" className="">
                        <div
                          className={clsx(
                            "flex justify-start w-fit px-2 gap-1 items-center rounded-[80px]",
                            !isVisible[index]
                              ? "bg-[#FB00781A]"
                              : "bg-[#00FBA01A]"
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
                              "text-success-1",
                              !isVisible[index] && "text-pink-1"
                            )}
                          >
                            {isVisible[index] ? "Active" : "Inactive"}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell as="td" className="">
                        <div className="flex justify-start w-fit gap-4 items-center">
                          <Link href="/admin/manage-user/edit-user">
                            <Icons.edit2
                              className="w-[21px] h-[21px]"
                              stroke="stroke-[#A3A3A3]"
                            />
                          </Link>
                          <button onClick={() => toggleVisibility(index)}>
                            {isVisible[index] ? (
                              <Eye color="#A3A3A3" size={20} />
                            ) : (
                              <EyeOff color="#A3A3A3" size={20} />
                            )}
                          </button>
                          <button>
                            <Icons.trash
                              stroke="stroke-[#A3A3A3]"
                              className="w-[22px] h-[22px]"
                            />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
      <BasicPagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageUser;
