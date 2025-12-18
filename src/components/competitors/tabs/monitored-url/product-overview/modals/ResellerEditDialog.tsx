"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as Icons from "@/svg/Icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import URLInputWithAction from "@/components/shared/URLInputWithAction";
const ResellerEditDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  // functions -------->

  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div className="w-full flex items-center">
      <Dialog open={isOpen} onOpenChange={toggleIsOpen}>
        <DialogTrigger>
          <Icons.edit />
        </DialogTrigger>
        <DialogContent
          cancelIcon
          className="xl:min-w-[1140px] xl:max-w-[1140px] overflow-y-auto max-h-[90dvh]  max-w-[95%] w-[95%] md:min-w-[800px] bg-primary border-none rounded-3xl"
        >
          <DialogTitle className="text-white-1 text-[24px]">
            Reseller Product Edit Page
          </DialogTitle>
          <div className="size-full flex flex-col gap-5">
            {/* Monitored Product URL -----------> */}
            <div className="w-full flex flex-col gap-5">
              <URLInputWithAction
                protocolStyles="bg-[#3A4249]"
                labelStyles="font-normal"
                buttonLabel="Check Now"
                placeholder="www.amazon.com/product"
                label="Reseller Product URL"
                protocol="https;//"
              />
              <div className="w-full grid grid-cols-1 xl:grid-cols-[330px,1fr] justify-center items-start gap-2 sm:gap-4">
                <div className="w-full min-h-[200px] md:min-h-[313px] shrink-0 relative">
                  <Image src="/products/Laptop.png" fill alt="" />
                </div>
                <form
                  action=""
                  className="w-full max-w-full flex flex-col gap-3 sm:gap-5"
                >
                  <Input
                    placeholder="Macbook Pro 15 Inch"
                    className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                    label="Title"
                  />
                  <div className="w-full grid md:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-6">
                    <Input
                      placeholder="$1100"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Reseller Price"
                    />
                    <Input
                      placeholder="Apple"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Brand"
                    />
                    <Input
                      placeholder="f47339hh33992"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Code"
                    />{" "}
                    <Input
                      placeholder="3d45hh6"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="SKU"
                    />
                    <Input
                      placeholder="+91 8973245647"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Reseller Contact Number"
                    />
                    <Input
                      placeholder="reseller@gmail.com"
                      className="w-full h-[43px] rounded-md bg-gray-2 border-none placeholder:text-white-1"
                      label="Reseller E-mail Id"
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
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>{" "}
    </div>
  );
};

export default ResellerEditDialog;
