"use client";

import React, { useState } from "react";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import ScrollArea from "@/components/shared/ScrollArea";
import * as Icons from "@/svg/Icons";
import clsx from "clsx";
import ActionsPopover from "@/components/shared/ActionsPopover";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import { EllipsisVertical, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import MonitioredProductDialog from "../modals/MonitioredProductDialog";

const MonitoredUrlsTable: React.FC = () => {
  const router = useRouter();
  // states ----->
  const [isVisible, setIsVisible] = useState(Array(4).fill(true));

  // functions -------->
  const toggleVisibility = (index: number) => {
    setIsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <>
      <ScrollArea>
        <Table className="min-w-[1050px]">
          <TableHeader>
            <TableRow className="bg-primary h-[36px] rounded-sm">
              {[
                "Competitor Domain",
                "Monitored URL",
                "Competitor Price",
                "Status",
                "Action",
              ].map((item: string, index: number) => {
                return (
                  <TableCell key={index} as="th">
                    <Typography color="secondary">{item}</Typography>
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
                    className={clsx("h-[40px] bg-transparent")}
                  >
                    <TableCell as="td" className="">
                      <div className="flex justify-start items-center gap-2">
                        <Image
                          src="/brands/nike.svg"
                          className="object-fill rounded-full"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <Typography>www.nike.com</Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography variant="small">
                        https://www.nike.com/shop-1
                      </Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography variant="small">$1000</Typography>
                    </TableCell>

                    <TableCell as="td" className="">
                      <div
                        className={clsx(
                          "flex justify-center w-[76px] h-[27px] px-2 gap-1 items-center bg-[#00B62A1A] rounded-[80px]",
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
      <MonitioredProductDialog />
    </>
  );
};

export default MonitoredUrlsTable;
