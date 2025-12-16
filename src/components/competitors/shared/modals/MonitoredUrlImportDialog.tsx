import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Typography from "@/components/ui/typography";
import { Download } from "lucide-react";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { Button } from "@/components/ui/button";
import * as Icons from "@/svg/Icons";

interface Props {
  dialogName: string;
  setDialogName: (name: string) => void;
}

const MonitoredUrlImportDialog: React.FC<Props> = ({
  dialogName,
  setDialogName,
}: Props) => {
  return (
    <Dialog
      open={dialogName === "import"}
      onOpenChange={() => setDialogName("")}
    >
      <DialogContent className="md:min-w-[530px] h-[500px] max-w-[90%] md:max-w-[530px] w-[90%] bg-primary border-none rounded-3xl">
        <DialogTitle></DialogTitle>
        <div className="size-full max-w-full flex flex-col items-center justify-between gap-5">
          <Typography
            variant="h3"
            className="text-[24px] font-semibold text-center"
          >
            Monitored Urls Import
          </Typography>
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="w-full flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Typography color="primary">Import From CSV</Typography>
                <InputHelpTooltip
                  className="size-[16px]"
                  helperText="Import From CSV"
                />
              </span>{" "}
              <span className="flex items-center gap-1">
                <Typography>Download CSV Template</Typography>
                <Download size={12} className="text-white-1" strokeWidth={3} />
              </span>
            </div>
            <div className="w-full h-[200px] py-5 flex flex-col items-center bg-gray-2 rounded-md justify-end gap-6">
              <Icons.cloud />
              <Typography variant="small" className="text-center">
                Click here to upload a new CSV (max. 20MB)
              </Typography>
            </div>
          </div>
        </div>
        <DialogFooter>
          <div className="w-full flex  items-center justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => setDialogName("")}
              className="border-orange-2 text-orange-2 h-[30px] w-70px] font-normal text-xs hover:bg-transparent hover:border-orange-2 hover:text-orange-2"
            >
              Cancel
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MonitoredUrlImportDialog;
