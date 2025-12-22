"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface Props {
  isManual: boolean;
  handleManualChange: () => void;
  successEvent?: () => void;
}

const UpgradeDialog: React.FC<Props> = ({
  isManual,
  handleManualChange,
  successEvent = () => {},
}: Props) => {
  return (
    <Dialog open={isManual} onOpenChange={handleManualChange}>
      <DialogContent className="md:min-w-[630px] h-[300px] max-w-[90%] md:max-w-[630px] w-[90%] bg-primary border-none rounded-3xl">
        <DialogTitle></DialogTitle>
        <div className="size-full max-w-full flex flex-col items-center justify-start gap-5">
          <Image
            src={"/icons/check.svg"}
            height={40}
            width={40}
            className="object-contain rounded-full"
            alt="subscription"
          />
          <Typography
            variant="h3"
            className="text-[24px] font-semibold text-center"
          >
            Upgrade to unlock this feature
          </Typography>
          <Typography className="text-center" color="primary">
            This feature is available for higher profiles, upgrade to unlock.
          </Typography>
        </div>
        <DialogFooter>
          <div className="w-full flex  items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={handleManualChange}
              className="border-orange-2 text-orange-2 h-[26px] w-full sm:w-[100px] font-normal text-xs hover:bg-transparent hover:border-orange-2 hover:text-orange-2"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                successEvent();
                handleManualChange();
              }}
              className="bg-orange-gradient text-white-1 h-[26px] w-full sm:w-[100px] font-normal text-xs "
            >
              See Plans
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeDialog;
