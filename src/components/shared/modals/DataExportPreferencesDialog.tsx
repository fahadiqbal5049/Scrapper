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
import * as Icons from "@/svg/Icons";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Clock3 } from "lucide-react";

interface Props {
  dialogName: string | boolean;
  setDialogName: (name: string | boolean) => void;
  isManual: boolean;
  handleManualChange: () => void;
}

const DataExportPreferencesDialog: React.FC<Props> = ({
  dialogName,
  setDialogName,
  isManual,
  handleManualChange,
}: Props) => {
  return (
    <Dialog
      open={dialogName === "export" || dialogName === true}
      onOpenChange={setDialogName}
    >
      <DialogContent className="md:min-w-[630px] max-h-[95dvh] !overflow-y-auto max-w-[90%] md:max-w-[630px] w-[90%] bg-primary border-none rounded-3xl">
        <DialogTitle></DialogTitle>
        <div className="size-full max-w-full flex flex-col items-center justify-start gap-5">
          <Typography variant="h3" className="text-[24px]">
            Data Export Preferences
          </Typography>
          <div className="w-full flex flex-col gap-2">
            <Typography color="secondary" className="font-medium">
              Export Format
            </Typography>
            <div className="w-full">
              <RadioGroup defaultValue="CSV" className="w-full flex gap-2">
                {["CSV", "Excel", "XML", "JSON"].map(
                  (item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="size-[18px]"
                        value={item}
                        id={item}
                      />
                      <label htmlFor={item}>
                        <Typography variant="small" color="secondary">
                          {item}
                        </Typography>
                      </label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Typography color="secondary" className="font-medium">
              Filters
            </Typography>
            <Typography color="secondary" className="font-medium">
              0 active filters
            </Typography>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Typography color="primary" className="font-medium">
              Send export file to
            </Typography>
            <Typography color="secondary" variant="small">
              You will receive the download link to these emails
            </Typography>
            <div className="flex items-center gap-2">
              <Typography color="secondary" variant="small">
                {`(john@hotmail.com)`}
              </Typography>
              <span className="h-[24px] w-[126px] flex items-center justify-center rounded-full bg-success-2/10">
                <Typography variant="small" className="text-success-2">
                  Upgrade to unlock
                </Typography>
              </span>
            </div>
          </div>
          <div className="w-full flex sm:flex-row flex-col sm:items-end justify-between gap-2 sm:gap-3">
            <div className="w-full flex flex-col gap-2">
              <div className=" w-full flex  items-center justify-between">
                <Typography color="secondary" className="font-medium">
                  Public Download Link
                </Typography>
                <span className="flex  items-center gap-1">
                  <Clock3 size={14} className="text-white-2" />
                  <Typography variant="small" color="primary">
                    Updated every 1 hour
                  </Typography>
                </span>
              </div>

              <div className="w-full h-[43px] border border-white-3 rounded-sm px-2 sm:px-4 flex items-center justify-between">
                <input
                  type="text"
                  className="size-full appearance-none focus:outline-none border-none bg-transparent text-white-2 text-sm font-normal"
                />
                <Icons.copyIcon className="cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-1 mb-2">
              <Switch
                width="w-[25px]"
                height="11px"
                thumbHeight="h-1.5"
                thumbWidth="w-1.5"
                checked={isManual}
                onCheckedChange={handleManualChange}
                thumbStyles="data-[state=checked]:translate-x-4"
                id={"Manual"}
              />
              <Typography color="primary">Manual</Typography>
            </div>
          </div>
          <div className="w-full bg-gray-2 rounded-md px-4 sm:px-6 py-5 sm:py-8 flex flex-col items-center justify-start gap-4 sm:gap-10">
            <Icons.fileDocument />
            <div className="w-full flex flex-col items-center gap-2">
              {" "}
              <Typography className="text-center font-medium" variant="text">
                Create a programmatic report
              </Typography>
              <Typography
                color="primary"
                variant="small"
                className="text-center"
              >
                Use this setup to create a programmatic report
              </Typography>
            </div>{" "}
            <Typography variant="small" className="text-center underline">
              Create new report
            </Typography>
          </div>
          <div className="w-full flex items-center -mt-2">
            <Typography variant="small" color="primary">
              Click "Export now" to generate the file
            </Typography>
          </div>
        </div>
        <DialogFooter>
          <div className="w-full flex  items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setDialogName("")}
              className="border-orange-2 text-orange-2 h-[35px] w-full sm:w-[147px] font-normal text-xs hover:bg-transparent hover:border-orange-2 hover:text-orange-2"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setDialogName("")}
              className="bg-orange-gradient text-white-1 h-[35px] w-full sm:w-[147px] font-normal text-xs "
            >
              Export Now
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DataExportPreferencesDialog;


