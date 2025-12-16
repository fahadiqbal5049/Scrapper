"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import * as Icons from "@/svg/Icons";
import Link from "next/link";


const AddCompetitors = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="iconOutline"
          className="border-[1px] border-white-4/80"
          icon={<Plus />}
          iconPosition="left"
        >
          Add Competitors
        </Button>
      </DialogTrigger>
      <DialogContent
        cancelIcon
        className="md:min-w-[685px] w-[90%] bg-primary border-none rounded-3xl"
      >
        <DialogTitle></DialogTitle>
        <div className="size-full flex flex-col items-center justify-start gap-5">
          <Typography variant="p" className="text-[24px] font-semibold">
            Add Competitor
          </Typography>
          <Typography color="primary" className="text-center">
            Please choose the kind of competitor you want to add. Marketplace
            for competitors like Amazon, eBay and Google Shopping or eCommerce
            Website for any other online store
          </Typography>
          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-5">
            <div className="h-[230px] w-[260px] bg-gray-2 rounded-md flex flex-col items-center justify-between p-4">
              <Typography
                variant="text"
                color="primary"
                className="font-semibold"
              >
                Marketplace
              </Typography>
              <div className="w-[50%] flex flex-wrap justify-center gap-y-4 gap-x-5">
                <Icons.amazon />
                <Icons.google />
                <Icons.ebay />
              </div>
              <Link href={"/competitors/competitors-overview/add-marketplace"}>
                <Typography variant="small" className="underline">
                  Start monitoring a marketplace
                </Typography>
              </Link>
            </div>{" "}
            <div className="h-[230px] w-[260px] bg-gray-2 rounded-md flex flex-col items-center justify-between p-4">
              <Typography
                variant="text"
                color="primary"
                className="font-semibold"
              >
                E-commerce Website
              </Typography>

              <Icons.store />

              <Link href={"/competitors/competitors-overview/add-ecom-web"}>
                <Typography variant="small" className="underline">
                  Start monitoring an ecommerce website
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCompetitors;
