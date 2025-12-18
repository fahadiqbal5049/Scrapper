"use client";

import React, { useState } from "react";
import ScrollArea from "@/components/shared/ScrollArea";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import Typography from "@/components/ui/typography";
import { Checkbox } from "@/components/ui/checkbox";
import * as Icons from "@/svg/Icons";
import clsx from "clsx";
import Image from "next/image";
import ActionsPopover from "@/components/shared/ActionsPopover";
import { CircleArrowUp, EllipsisVertical, Eye, EyeOff } from "lucide-react";
import StockStatusCell from "@/components/shared/StockStatusCell";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MonitoredTable: React.FC = () => {
  const router = useRouter();
  // states ---------->
  const [isVisible, setIsVisible] = useState(Array(6).fill(true));
  const [selectedRows, setSelectedRows] = useState(Array(6).fill(false));
  const [selectAll, setSelectAll] = useState(false);

  // functions ----------->
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
      <Table className="min-w-[1150px]">
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
              "Monitored URL",
              "Min-Max Price",
              "My Price",
              "Diff",
              "Position",
              "Stock",
              "Status",
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
          {FullDetailData.map((item, index) => {
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
                  $100-$130
                </TableCell>
                <TableCell as="td" className="">
                  $230
                </TableCell>
                <TableCell as="td" className="">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex justify-start gap-1 items-center">
                      <p>$100-$130</p>
                    </div>
                    <div className="max-w-[80px] w-full relative bg-red-1/10 rounded-[10px] h-[7px]">
                      <div className="absolute h-full rounded-[10px] left-0 top-0 bg-red-1 w-[60%]"></div>
                    </div>
                  </div>
                </TableCell>
                <TableCell as="td" className="">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex justify-start gap-1 items-center">
                      <CircleArrowUp className="size-[13px] text-success-1" />
                      <p>1/3</p>
                    </div>
                    <div className="max-w-[80px] w-full relative bg-success-1/10 rounded-[10px] h-[7px]">
                      <div className="absolute h-full rounded-[10px] left-0 top-0 bg-success-1 w-[60%]"></div>
                    </div>
                  </div>
                </TableCell>
                <TableCell as="td" className="">
                  <StockStatusCell stock={item.stock} />
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
                          onClick: () => {
                            router.push(
                              "/competitors/monitored-url/add-monitored-url"
                            );
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

export default MonitoredTable;

const FullDetailData = [
  {
    stock: 50,
  },
  {
    stock: "analyzing",
  },
  {
    stock: 80,
  },
  {
    stock: "out-of-stock",
  },
  {
    stock: "no-data",
  },
  {
    stock: "analyzing",
  },
];
