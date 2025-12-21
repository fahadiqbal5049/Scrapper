"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogHeader,
} from "@/components/ui/dialog";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { CloudUpload, X } from "lucide-react";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { Download } from "lucide-react";
import * as Icons from "@/svg/Icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const ImportNewProductDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex border rounded-sm text-sm h-9 px-4 py-2 border-white-2 bg-transparent text-white-2 hover:border-transparent shadow-sm hover:bg-neutral-100 hover:text-neutral-900 justify-center items-center gap-2">
        <span className="">Connect Datafeed</span>
        <CloudUpload size={21} color="#A3A3A3" />
      </DialogTrigger>
      <DialogContent className="lg:min-w-[950px] max-h-[95dvh] !overflow-y-auto flex flex-col gap-0 px-4 sm:px-6 pt-4 pb-6 max-w-[90%] lg:max-w-[950px] w-[90%] bg-primary border-none rounded-3xl">
        <DialogTitle className="absolute"></DialogTitle>
        <DialogClose className="w-full flex items-center justify-end">
          <X size={22} color="#A3A3A3" />
        </DialogClose>
        <DialogHeader className="flex sm:mt-0 mt-2 flex-col">
          <Typography className="text-[24px] leading-[30px] text-white-1 font-semibold">
            Import Your Products
          </Typography>
          <Typography variant="p" color="primary">
            Select the method you prefer to use to import your catalog
          </Typography>
        </DialogHeader>
        <div className="w-full mt-5 grid md:gap-0 gap-12 grid-cols-1 md:grid-cols-[1fr,50px,1fr] lg:grid-cols-[1fr,100px,1fr]">
          {/* CSV Datafeed URL section ---------> */}
          <div className="w-full flex justify-center md:justify-start">
            <div className="w-full flex flex-col max-w-[360px] gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Typography
                    className="text-[18px] font-semibold"
                    color="primary"
                  >
                    CSV Datafeed
                  </Typography>
                  <InputHelpTooltip helperText="CSV Datafeed" />
                </div>
                <div className="flex items-center gap-2">
                  <Typography variant="small" className="text-white-4">
                    Download CSV Template
                  </Typography>
                  <button>
                    <Download size={12} color="#FAFAFA" />
                  </button>
                </div>
              </div>
              {/* upload file  */}
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="p" color="primary">
                  Click here to import your product using a CSV file
                </Typography>
                <label className="w-full px-3 bg-[#3A4249] cursor-pointer gap-10 hover:opacity-80 duration-200 rounded-lg min-h-[233px] flex flex-col justify-center items-center">
                  <input type="file" accept=".csv" className="hidden" />
                  <Icons.upload className="w-[56px] h-[38px]" />
                  <Typography
                    variant="small"
                    className="text-white-1 text-center"
                  >
                    Click here to upload a new CSV (max. 20MB)
                  </Typography>
                </label>
              </div>
              {/* CSV Datafeed Url -->  */}
              <div className="w-full flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Typography
                    className="text-[18px] font-semibold"
                    color="primary"
                  >
                    CSV Datafeed Url
                  </Typography>
                  <InputHelpTooltip helperText="CSV Datafeed Url" />
                </div>
                <Typography variant="small" color="primary">
                  Let us pick your catalog every day using a public URL
                </Typography>
                {/* save url */}
                <div className="w-full mt-4 flex flex-col gap-3">
                  <div className="w-full flex justify-between items-center">
                    <Typography variant="p" color="primary">
                      File url
                    </Typography>
                    <div className="flex justify-start items-center gap-2">
                      <Checkbox
                        className="w-[18px] h-[18px]"
                        iconSize="w-4 h-4"
                        id="This url is password protected"
                      />
                      <label
                        htmlFor="This url is password protected"
                        className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <Typography variant="p" color="primary">
                          This url is password protected
                        </Typography>
                      </label>
                    </div>
                  </div>
                  <div className="w-full flex justify-end px-2 items-center border-[1px] border-[#A4A4A4] rounded-[2px] h-[43px]">
                    <button>
                      <Typography
                        variant="small"
                        className="text-orange-1 items-center"
                      >
                        Save
                      </Typography>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full hidden md:flex justify-center items-center h-full">
            <hr className="border-l-[1px] h-full border-white-2" />
          </div>
          {/* Connect Your Platform section here -----> */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[298px] flex flex-col gap-4">
              <div className="flex flex-col">
                <Typography className="text-[18px] font-semibold text-white-2">
                  Connect Your Platform
                </Typography>
                <Typography variant="small" color="primary">
                  Use Zikkio to connect and keep in sync your catalog
                </Typography>
              </div>
              <button className="flex hover:opacity-80 duration-200 items-center justify-end gap-1">
                <Plus size={12} color="#FFFFFF" />
                <Typography className="text-[10px] text-white-1 font-medium">
                  Add Platform
                </Typography>
              </button>
              {/* platforms ---> */}
              <div className="w-full flex flex-col gap-3">
                {PlatformsData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full min-h-[50px] flex items-center bg-white-1/10 rounded-sm px-4"
                    >
                      <div className={clsx("relative", item.size)}>
                        <Image
                          src={item.src}
                          className="object-cover"
                          fill
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-between items-center">
                <Typography variant="p" color="primary">
                  Marketplace
                </Typography>
                <button className="flex hover:opacity-80 duration-200 items-center justify-end gap-1">
                  <Plus size={12} color="#FFFFFF" />
                  <Typography className="text-[10px] text-white-1 font-medium">
                    Add Marketplace
                  </Typography>
                </button>
              </div>
              {/* marketplaces -----> */}
              <div className="w-full flex flex-col gap-3">
                {MarketPlacesData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full min-h-[50px] flex items-center bg-white-1/10 rounded-sm px-4"
                    >
                      <div className={clsx("relative", item.size)}>
                        <Image
                          src={item.src}
                          className="object-cover"
                          fill
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImportNewProductDialog;




export const MarketPlacesData = [
  {
    size: "w-[60px] h-[27px]",
    src: "/platforms/bol.svg",
  },
  {
    size: "w-[70px] h-[28px]",
    src: "/platforms/amazon.svg",
  },
  {
    size: "w-[52px] h-[25px]",
    src: "/platforms/ebay.svg",
  },
  {
    size: "w-[132px] h-[22px]",
    src: "/platforms/ali-baba.svg",
  },
  {
    size: "w-[88px] h-[32px]",
    src: "/platforms/ali-express.svg",
  },
];

export const PlatformsData = [
  {
    size: "w-[110px] h-[34px]",
    src: "/platforms/shopify.svg",
  },
  {
    size: "w-[110px] h-[22px]",
    src: "/platforms/woocomerce.svg",
  },
  {
    size: "w-[36px] h-[16px]",
    src: "/platforms/wix.svg",
  },
  {
    size: "w-[135px] h-[21px]",
    src: "/platforms/googleShoping.svg",
  },
  {
    size: "w-[106px] h-[28px]",
    src: "/platforms/magento.svg",
  },
  {
    size: "w-[127px] h-[33px]",
    src: "/platforms/presta-shop.svg",
  },
];
