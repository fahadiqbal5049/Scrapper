"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as Icons from "@/svg/Icons";
import Typography from "@/components/ui/typography";

import Table from "@/components/shared/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import TableBody from "@/components/shared/table/TableBody";
import Image from "next/image";
import ScrollArea from "@/components/shared/ScrollArea";

type Props = {
  infoData?: any[];
  infoTextColor?: any;
};
const ResellerInfoDialog = ({
  infoData = resellerInfo,
  infoTextColor = "primary",
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Icons.contact
            className="w-[24px] h-[24px] cursor-pointer"
            fill="fill-white-2"
          />
        </button>
      </DialogTrigger>
      <DialogContent
        cancelIcon
        className="xl:min-w-[1090px] overflow-hidden max-w-[90%] xl:max-w-[1090px] w-[90%] bg-gray-2 border-none rounded-md"
      >
        <DialogTitle></DialogTitle>
        <div className="size-full overflow-auto table-scrollbar max-w-full flex flex-col justify-start gap-5">
          <Typography variant="h4" className="font-normal">
            Reseller Contact Information
          </Typography>
          <ScrollArea>
            <Table className="w-full min-w-[800px]">
              <TableHeader>
                <TableRow className="bg-primary h-[35px] rounded-sm">
                  {[
                    "Reseller",
                    "Reseller URL’s",
                    " Reseller Contact Number",
                    " Reseller E-mail Id",
                  ].map((item: string, index: number) => (
                    <TableCell key={index} as="th" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        {" "}
                        <Typography
                          color="primary"
                          variant="small"
                          className="font-medium"
                        >
                          {item}
                        </Typography>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {infoData.map((item: any, index: number) => (
                  <TableRow key={index} className={"bg-transparent h-[40px]"}>
                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        <Image
                          src={item.brandLogo}
                          alt={""}
                          height={24}
                          width={24}
                          className="object-cover rounded-full"
                        />
                        <Typography variant="small">
                          {item.brandName}
                        </Typography>
                      </div>
                    </TableCell>

                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        <Typography
                          color={infoTextColor}
                          variant="small"
                          className="font-medium"
                        >
                          {item.resellerURL}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        <Typography
                          color={infoTextColor}
                          variant="small"
                          className="font-medium"
                        >
                          {item.resellerContactNumber}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2 px-2">
                        <Typography
                          color={infoTextColor}
                          variant="small"
                          className="font-medium"
                        >
                          {item.resellerEmailId}
                        </Typography>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResellerInfoDialog;

const resellerInfo = [
  {
    brandName: "www.nike.com",
    brandLogo: "/brands/nike.svg",
    resellerURL: "https://www.nike.com/shop-1",
    resellerContactNumber: "+91 7234567891",
    resellerEmailId: "reseller@gmail.com",
  },
  {
    brandName: "www.apple.com",
    brandLogo: "/brands/applelogo.svg",
    resellerURL: "https://www.apple.com/shop-1",
    resellerContactNumber: "+91 7234567891",
    resellerEmailId: "reseller@gmail.com",
  },
  {
    brandName: "www.samsung.com",
    brandLogo: "/brands/samsung.svg",
    resellerURL: "https://www.samsung.com/shop-1",
    resellerContactNumber: "+91 7234567891",
    resellerEmailId: "reseller@gmail.com",
  },
];
