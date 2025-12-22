"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
const RepricingPreviewDialog = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened(!isOpened);
  };
  return (
    <Dialog onOpenChange={handleOpen} open={isOpened}>
      <DialogTrigger asChild>
        <Button variant="outline">Save Rule & Preview</Button>
      </DialogTrigger>
      <DialogContent
        cancelIcon
        className="xl:min-w-[1120px] overflow-hidden max-w-[90%] xl:max-w-[1120px] w-[90%] bg-primary border-none rounded-2xl"
      >
        <DialogTitle></DialogTitle>
        <div className="size-full max-w-full overflow-auto table-scrollbar flex flex-col justify-start gap-5">
          <Typography variant="h4" className="font-normal">
            Repricing Preview
          </Typography>
          <ScrollArea>
            <Table className="min-w-[1000px]">
              <TableHeader>
                <TableRow className="bg-tertary h-[35px]">
                  {[
                    "Product Name",
                    "Price",
                    "Cost",
                    "Markup",
                    "New Price",
                    "Min/Max Price",
                    "Competitor Prices",
                    "Triggered Rule",
                  ].map((item: string, index: number) => (
                    <TableCell key={index} as="th" className="">
                      <Typography
                        color="primary"
                        variant="small"
                        className="font-medium"
                      >
                        {item}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4].map((order, index) => (
                  <TableRow
                    key={index}
                    className={clsx(
                      "h-[35px]",
                      index % 2 === 0 ? "bg-transparent " : " bg-[#343E46]"
                    )}
                  >
                    <TableCell as="td" className="">
                      <div className="flex justify-start items-center gap-2">
                        <Image
                          src="/products/shoes.svg"
                          className="object-cover rounded-sm"
                          alt=""
                          width={36}
                          height={36}
                        />
                        <Typography color="secondary">Nike Flyknit </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">$50</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">$30</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">$20</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">$48</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">$30-$48</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <Typography color="secondary">$49</Typography>
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="size-full flex items-center justify-start gap-2">
                        <Icons.dollar />
                        <Typography color="secondary">
                          Reprice 1 cent below my cheapest competitor
                        </Typography>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
        <DialogFooter className="w-full flex items-center justify-end mt-3">
          <Link
            href={"/repricing/repricing-overview"}
            onClick={handleOpen}
            className="h-[34px] w-[65px] flex justify-center items-center bg-orange-gradient border-none rounded-sm"
          >
            <Typography variant="small" className="font-medium">
              Apply
            </Typography>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RepricingPreviewDialog;
