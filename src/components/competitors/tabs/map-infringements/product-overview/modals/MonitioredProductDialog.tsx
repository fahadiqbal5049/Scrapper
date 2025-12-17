"use client";
import React, { useState } from "react";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import ScrollArea from "@/components/shared/ScrollArea";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import URLInputWithAction from "@/components/shared/URLInputWithAction";
const MonitioredProductDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  // functions -------->

  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div className="w-full flex items-center">
      <Dialog open={isOpen} onOpenChange={toggleIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant={"gradientOutline"}
            className="h-[26px] !text-xs !font-normal !text-orange-1"
          >
            Add Monitored URL Competitor
          </Button>
        </DialogTrigger>
        <DialogContent
          cancelIcon
          className="xl:min-w-[1140px] xl:max-w-[1140px] overflow-x-hidden 4xl:h-[830px] h-[95dvh] overflow-y-auto  max-w-[95%] w-[95%] md:min-w-[800px] bg-primary border-none rounded-3xl"
        >
          <DialogTitle className="text-white-1 text-[24px]">
            Add Monitored Product URL
          </DialogTitle>
          <div className="size-full flex flex-col gap-5">
            {/* Monitored Product URL -----------> */}
            <div className="w-full flex flex-col gap-5">
              <URLInputWithAction
                protocolStyles="bg-[#3A4249]"
                labelStyles="font-normal"
                buttonLabel="Check Now"
                placeholder="www.amazon.com/product"
                label="Monitored Product URL"
                protocol="https;//"
              />
              <div className="w-full grid grid-cols-1 xl:grid-cols-[330px,1fr] justify-center items-start gap-2 sm:gap-4">
                <div className="w-full min-h-[200px] md:min-h-[313px] shrink-0 relative">
                  <Image src="/brands/apple.svg" fill alt="" />
                </div>
                <form
                  action=""
                  className="w-full max-w-full flex flex-col gap-3 sm:gap-5"
                >
                  <div className="w-full border-b border-b-white-3 pb-2">
                    <Typography
                      variant="h4"
                      className="font-normal"
                      color="secondary"
                    >
                      Data Fields Matching
                    </Typography>
                  </div>
                  <Input
                    placeholder="Macbook Pro 15 Inch"
                    className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                    label="Title"
                  />
                  <div className="w-full grid md:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-6">
                    <Input
                      placeholder="$1100"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Price"
                    />
                    <Input
                      placeholder="100"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Stock"
                    />
                    <Input
                      placeholder="f47339hh33992"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Code"
                    />
                    <Input
                      placeholder="Apple"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Brand"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full items-center flex justify-end">
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  toggleIsOpen();
                }}
                variant="orangeGradient"
              >
                Add
              </Button>
            </div>
            <div className="w-full flex flex-col">
              <Typography variant="h4" className="text-white-1 font-normal">
                Recommended Monitored Products
              </Typography>
              <Typography variant="small" color="primary">
                Given recommendation based upon your product
              </Typography>
            </div>

            {/* Recommended Monitored Products ---------> */}
            <div className="w-full bg-gray-2 overflow-auto table-scrollbar !max-w-full rounded-lg p-4 flex flex-col">
              <ScrollArea>
                <Table className="min-w-[530px] w-full">
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
                      <TableCell as="td" className="flex justify-end">
                        <button>
                          <CirclePlus size={22} color="#A4A4A4" />
                        </button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </Dialog>{" "}
    </div>
  );
};

export default MonitioredProductDialog;
