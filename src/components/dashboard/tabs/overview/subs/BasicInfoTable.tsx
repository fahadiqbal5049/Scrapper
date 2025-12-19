"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import * as Icons from "@/svg/Icons";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import ScrollArea from "@/components/shared/ScrollArea";
import { EllipsisVertical, Eye, EyeOff } from "lucide-react";
import ActionsPopover from "@/components/shared/ActionsPopover";
import { useRouter } from "next/navigation";
import Link from "next/link";
const BasicInfoTable: React.FC = () => {
  const [isVisible, setIsVisible] = useState(Array(6).fill(true));
  const router = useRouter();
  const toggleVisibility = (index: number) => {
    setIsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const [selectedRows, setSelectedRows] = useState(Array(6).fill(false));
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
    <ScrollArea>
      <Table className="min-w-[1050px]">
        <TableHeader>
          <TableRow className="bg-[#252D33]">
            <TableCell as="th" className="">
              <Checkbox
                checked={selectAll}
                onCheckedChange={handleSelectAllChange}
              />
            </TableCell>
            {[
              "Competitor Domain",
              "Monitored URL",
              "Prod. Matched",
              "MAP Infrigements",
              "Your Position",
              "Alerts",
              "Status",
              "Action",
            ].map((item: string, index: number) => {
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
                    <Link
                      href={"/competitors/competitors-overview/view-competitor"}
                      className="flex justify-start items-center gap-2"
                    >
                      <Image
                        src="/brands/nike.svg"
                        className="object-fill"
                        alt=""
                        width={23}
                        height={23}
                      />
                      <p>Nike.com</p>
                    </Link>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Link
                      href={"/competitors/monitored-url"}
                      className="flex justify-start items-center gap-2"
                    >
                      <div className="w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white-2">
                        <Typography variant="p" className="text-white-1">
                          5
                        </Typography>
                      </div>
                      <p>Show</p>
                    </Link>
                  </TableCell>
                  <TableCell as="td" className="">
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white-2">
                        <Typography variant="p" className="text-white-1">
                          5
                        </Typography>
                      </div>
                      <button className="bg-transparent">Run Automatch</button>
                    </div>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Link
                      href={"/competitors/map-infringements"}
                      className="flex justify-start items-center gap-2"
                    >
                      <div className="w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white-2">
                        <Typography variant="p" className="text-white-1">
                          5
                        </Typography>
                      </div>
                      <p>Show</p>
                    </Link>
                  </TableCell>
                  <TableCell as="td" className="">
                    <div className="flex flex-col justify-center items-start gap-2">
                      <div className="flex justify-start gap-1 items-center">
                        <Icons.upCircle
                          className="w-[16px] h-[16px]"
                          fill="fill-success-1"
                        />
                        <Typography variant="p" className="text-white-1">
                          4/5
                        </Typography>
                      </div>
                      <div className="max-w-[80px] w-full relative bg-success-3 rounded-[10px] h-[7px]">
                        <div className="absolute h-full rounded-[10px] left-0 top-0 bg-success-1 w-[70%]"></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell as="td" className="">
                    <Link href={"/alert/alert-rule"}>1 Alert</Link>
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
                      </button>
                      <ActionsPopover
                        className="w-[140px]"
                        trigger={
                          <EllipsisVertical className="size-[20px] text-white-2 cursor-pointer" />
                        }
                        actions={[
                          {
                            label: "Edit",
                            onClick: () => {
                              router.push(
                                "/competitors/competitors-overview/edit-competitor"
                              );
                            },
                          },
                          {
                            label: "Delete",
                            onClick: () => {},
                          },
                          {
                            label: "View Competitor",
                            onClick: () => {
                              router.push(
                                "/competitors/competitors-overview/view-competitor"
                              );
                            },
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
  );
};

export default BasicInfoTable;
