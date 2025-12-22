import React from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RepricingPreviewDialog from "./RepricingPreviewDialog";

const StatusHeader = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col justify-between gap-3 items-center">
      <Typography variant="text" className="text-white-4 font-medium">
        Create / Edit Repricing Rule
      </Typography>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Link href="/repricing/my-repricing-rules">
          <Button variant="outline">Back</Button>
        </Link>
        <Button variant="outline">Save Rule</Button>
        <RepricingPreviewDialog />
      </div>
    </div>
  );
};

export default StatusHeader;
