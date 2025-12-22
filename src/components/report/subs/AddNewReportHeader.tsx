import React from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AddNewReportHeader: React.FC = () => {
  return (
    <div className="w-full xs:flex-row flex-col flex justify-between items-start xs:items-center gap-2">
      <div className="flex flex-col">
        <Typography variant="p" className="text-white-4 font-medium">
          New Report
        </Typography>
        <Typography variant="p" color="primary">
          Create or edit a programmatic report
        </Typography>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link href="/reports">
          <Button variant="outline">Back</Button>
        </Link>
        <Button variant="outline">Generate</Button>
        <Button variant="outline">Save</Button>
      </div>
    </div>
  );
};

export default AddNewReportHeader;
