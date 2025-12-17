"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import URLInputWithAction from "@/components/shared/URLInputWithAction";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableRow from "@/components/shared/table/TableRow";
import TableHeader from "@/components/shared/table/TableHeader";
import ScrollArea from "@/components/shared/ScrollArea";
import { CirclePlus, EllipsisVertical, Eye, EyeOff } from "lucide-react";
import ActionsPopover from "@/components/shared/ActionsPopover";

const EditCompetitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="size-full flex flex-col items-start justify-start gap-5 lg:gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/competitors/competitors-overview">Competitors</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Edit Competitor</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full flex flex-col gap-6 bg-primary rounded-lg px-4 py-6">
        <Typography className="text-[18px] text-white-2 font-semibold">
          E-commerce Website
        </Typography>
        <div className="flex gap-2 flex-col">
          <URLInputWithAction
            buttonLabel="Check Now"
            placeholder="www.amazon.com/product"
            label="Competitors Product URL"
            protocol="https;//"
          />
          <Typography variant="small" className="text-white-4">
            Please enter a page of your competitor's store which contains
            product information
          </Typography>
        </div>
        {/* add new one ------>  */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-[230px,1fr] md:grid-cols-[330px,1fr] justify-center items-start gap-5 sm:gap-4">
          <div className="w-full min-h-[200px] md:min-h-[313px] relative">
            <Image src="/brands/apple.svg" fill alt="" />
          </div>
          <form action="" className="w-full flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col gap-1">
              <Typography variant="h4" className="font-normal" color="primary">
                Data Fields Matching
              </Typography>
              <hr className="border-white-2" />
            </div>
            <Input
              placeholder="JBL Plus 2 Portable Bluetooth Speaker  "
              className="w-full rounded-md"
              label="Title"
            />
            <div className="w-full grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col gap-1">
                <Input
                  placeholder="$200"
                  className="w-full rounded-md"
                  label="Price"
                />
                <Typography variant="small" color="primary">
                  Note: Currency is auto-detected and can be changed from
                  supplier's profile
                </Typography>
              </div>
              <Input
                placeholder="100"
                className="w-full rounded-md"
                label="Stock"
              />
            </div>
            <div className="w-full grid grid-cols-2 gap-4 md:gap-8">
              <Input
                placeholder="s32r432d45tt3"
                className="w-full rounded-md"
                label="Code"
              />
              <Input
                placeholder="JBL"
                className="w-full rounded-md"
                label="Brand"
              />
            </div>
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                onClick={(e) => e.preventDefault()}
                variant="orangeGradient"
                className="w-fit"
              >
                Edit
              </Button>
            </div>
          </form>
        </div>
        {/* Recommended E-commerce Website ---------> */}
        <div className="w-full mt-6 flex flex-col">
          <Typography variant="h4" className="text-white-1">
            Monitored Products
          </Typography>
          <Typography variant="small" color="primary">
            Given recommendation based upon your product
          </Typography>
          <div className="w-full bg-gray-2 mt-5 px-3 rounded-lg">
            <ScrollArea>
              <Table className="min-w-[530px]">
                <TableHeader>
                  <TableRow>
                    <TableCell as="th" className="">
                      Competitors
                    </TableCell>
                    <TableCell as="th" className="">
                      Competitors product URL’s
                    </TableCell>
                    <TableCell as="th" className="flex justify-end">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell as="td" className="">
                      <div className="flex justify-start items-center gap-2">
                        <Image
                          src="/brands/nike.svg"
                          className="rounded-full"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <Typography variant="p" className="text-white-1">
                          www.nike.com
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="text-white-1">
                      https://www.nike.com/shop-1
                    </TableCell>
                    <TableCell as="td" className="">
                      <div className="flex justify-end gap-4 items-center">
                        <button onClick={toggleVisibility}>
                          {isVisible ? (
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
                              label: "View Product",
                              onClick: () => {},
                            },
                          ]}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCompetitor;
