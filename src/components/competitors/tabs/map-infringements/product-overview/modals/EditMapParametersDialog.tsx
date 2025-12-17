"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as Icons from "@/svg/Icons";
type Props = {
  mapInfo: any;
  handleMapInfoChange: any;
};
const EditMapParametersDialog = ({ mapInfo, handleMapInfoChange }: Props) => {
  const [editDialog, setEditDialog] = useState(false);
  const toggleEditDialog = () => setEditDialog(!editDialog);
  return (
    <>
      <Dialog open={editDialog} onOpenChange={toggleEditDialog}>
        <DialogTrigger>
          <Icons.edit />
        </DialogTrigger>
        <DialogContent
          cancelIcon
          className="xl:min-w-[1120px] py-8 md:py-12 w-[90%] bg-primary border-none rounded-3xl"
        >
          <DialogTitle className="text-white-1 text-[24px]">
            Edit MAP Parameters
          </DialogTitle>
          <div className="size-full flex xl:flex-row flex-col items-center justify-between gap-3 sm:gap-5 my-4">
            <Input
              placeholder="Map Min Price"
              className="sm:w-[320px] w-[300px] h-[43px] rounded-md bg-gray-2 border-none "
              label="Map Min Price"
              value={mapInfo.min}
              name="min"
              onChange={handleMapInfoChange}
            />
            <Input
              placeholder="Map Max Price"
              className="sm:w-[320px] w-[300px] h-[43px] rounded-md bg-gray-2 border-none "
              label="Map Max Price"
              value={mapInfo.max}
              name="max"
              onChange={handleMapInfoChange}
            />
            <Input
              placeholder="Drift Limit"
              className="sm:w-[320px] w-[300px] h-[43px] rounded-md bg-gray-2 border-none "
              label="Drift Limit"
              value={mapInfo.diff}
              name="diff"
              onChange={handleMapInfoChange}
            />
          </div>
          <DialogFooter className="w-full flex items-center justify-end min-w-full">
            <Button
              onClick={toggleEditDialog}
              className="bg-orange-gradient text-white-1 font-medium text-base mt-4 w-[70px]"
            >
              Edit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditMapParametersDialog;
