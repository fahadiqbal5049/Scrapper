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
import Image from "next/image";
import clsx from "clsx";
import { EllipsisVertical, Eye, EyeOff, Pencil } from "lucide-react";
import MapStatus from "../../../map-infringements/subs/MapStatus";

import ResellerInfoDialog from "../../../map-infringements/subs/ResellerInfoDialog";
import ResellerEditDialog from "../modals/ResellerEditDialog";
import AddResellerDialog from "../modals/AddResellerDialog";

const ResellersTable: React.FC = () => {
  // states ------------>
  const [isVisible, setIsVisible] = useState(Array(4).fill(true));

  // functions -------->
  const toggleVisibility = (index: number) => {
    setIsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };
  // functions ----------->

  return (
    <>
      {" "}
      <ScrollArea>
        <Table className="min-w-[1050px]">
          <TableHeader>
            <TableRow className="bg-primary h-[36px]">
              {[
                "Reseller",
                "Reseller URL's",
                "Reseller Price",
                "MAP Status",
                "Status",
                "Action",
              ].map((item, index) => {
                return (
                  <TableCell key={index} as="th" className={""}>
                    <Typography color="secondary">{item}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mapStatus.map((item, index) => {
              return (
                <TableRow key={index} className={"h-[40px]"}>
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
                    <MapStatus statusObject={item} />
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
                      </button>{" "}
                      <ResellerInfoDialog
                        infoTextColor={"default"}
                        infoData={[
                          {
                            brandName: "www.nike.com",
                            brandLogo: "/brands/nike.svg",
                            resellerURL: "https://www.nike.com/shop-1",
                            resellerContactNumber: "+91 7234567891",
                            resellerEmailId: "reseller@gmail.com",
                          },
                        ]}
                      />
                      <ResellerEditDialog />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollArea>
      <AddResellerDialog />
    </>
  );
};

export default ResellersTable;

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
