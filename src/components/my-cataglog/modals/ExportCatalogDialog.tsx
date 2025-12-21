"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  setIsopen: () => void;
}

const ExportCatalog: React.FC<Props> = ({ open, setIsopen }) => {
  return (
    <Dialog open={open} onOpenChange={setIsopen}>
      <DialogContent className="md:min-w-[530px] h-[300px] max-w-[90%] md:max-w-[530px] w-[90%] bg-primary border-none rounded-3xl">
        <DialogTitle></DialogTitle>
        <div className="size-full max-w-full flex flex-col items-center justify-start gap-12">
          <Typography
            variant="h3"
            className="text-[24px] font-semibold text-center"
          >
            Catalog Export
          </Typography>
          <div className="flex justify-center items-start gap-5">
            <Typography variant="small" className="text-white-1">
              Send export file to
            </Typography>
            <Typography variant="small" className="text-white-1">
              You will receive the download link to these emails: <br />
              <span className="underline">(junalda@hotmail.com)</span>
            </Typography>
          </div>
        </div>
        <DialogFooter>
          <div className="w-full flex items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={setIsopen}
              className="border-orange-2 text-orange-2 h-[26px] w-full sm:w-[100px] font-normal text-xs hover:bg-transparent hover:border-orange-2 hover:text-orange-2"
            >
              Cancel
            </Button>
            <Button
              onClick={setIsopen}
              className="bg-orange-gradient text-white-1 h-[26px] w-full sm:w-[100px] font-normal text-xs "
            >
              Export Now
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExportCatalog;
