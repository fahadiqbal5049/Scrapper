"use client";

import React, { useState } from "react";
import ScrollArea from "@/components/shared/ScrollArea";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import Typography from "@/components/ui/typography";
import * as Icons from "@/svg/Icons";
import { Checkbox } from "@/components/ui/checkbox";
import ActionsPopover from "@/components/shared/ActionsPopover";
import Image from "next/image";
import clsx from "clsx";
import { EllipsisVertical } from "lucide-react";
import MapStatus from "./MapStatus";
import { useRouter } from "next/navigation";
import ResellerInfoDialog from "./ResellerInfoDialog";
import Link from "next/link";

const MapInfringementsTable: React.FC = () => {
  const router = useRouter();
  // states ------------>
  const [selectedRows, setSelectedRows] = useState(Array(4).fill(false));
  const [selectAll, setSelectAll] = useState(false);

  // functions ----------->

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
              "Product",
              "Reseller URL",
              "Reseller Price Range",
              "Map Min-Max",
              "MAP Status",
              "Drift Limit",
              "Action",
            ].map((item, index) => {
              return (
                <TableCell
                  key={index}
                  as="th"
                  className={clsx("", index === 0 && "min-w-[200px]")}
                >
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
          {mapStatus.map((item, index) => {
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
                    href={"/competitors/monitored-url/add-monitored-url"}
                    className="flex justify-start items-center gap-2"
                  >
                    <Image
                      src="/brands/product2.svg"
                      className="object-fill"
                      alt=""
                      width={37}
                      height={37}
                    />
                    <div className="flex flex-col">
                      <p>Nike Air Jordan Blue</p>
                      <p>SKU:4khdgb8</p>
                      <p>Code:E74848039</p>
                    </div>
                  </Link>
                </TableCell>
                <TableCell as="td" className="">
                  <Link
                    href={"/competitors/map-infringements/add-reseller"}
                    className="flex justify-start items-center gap-2"
                  >
                    <div className="w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white-2">
                      <Typography variant="p" className="text-white-1">
                        12
                      </Typography>
                    </div>
                    <p>Show</p>
                  </Link>
                </TableCell>
                <TableCell as="td" className="">
                  $300-$320
                </TableCell>
                <TableCell as="td" className="">
                  $280-$320
                </TableCell>
                <TableCell as="td" className="">
                  <MapStatus statusObject={item} />
                </TableCell>
                <TableCell as="td" className="">
                  $10
                </TableCell>
                <TableCell as="td" className="">
                  <div className="flex justify-start w-fit gap-4 items-center">
                    <ResellerInfoDialog />
                    <ActionsPopover
                      trigger={
                        <EllipsisVertical className="size-[20px] text-white-2 cursor-pointer" />
                      }
                      actions={[
                        {
                          label: "Edit",
                          onClick: () => {
                            router.push("/competitors/map-infringements");
                          },
                        },
                        {
                          label: "Delete",
                          onClick: () => {},
                        },
                        {
                          label: "View Product",
                          onClick: () => {
                            router.push(
                              "/competitors/monitored-url/add-monitored-url"
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

export default MapInfringementsTable;

const mapStatus = [
  {
    status: "MAP Infringement Detected",
    bgColor: "bg-[#00B62A1A]",
    textColor: "text-success-2",
  },
  {
    status: "Action Required",
    bgColor: "bg-[#EB730133]",
    textColor: "text-orange-2",
  },
  {
    status: "Not Found",
    bgColor: "bg-[#60B2FF1A]",
    textColor: "text-[#60B2FF]",
  },
  {
    status: "Action Required",
    bgColor: "bg-[#EB730133]",
    textColor: "text-orange-2",
  },
];
