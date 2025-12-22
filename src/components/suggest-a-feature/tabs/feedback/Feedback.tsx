import Typography from "@/components/ui/typography";
import React from "react";
import FeaturesRequestsForm from "./subs/FeaturesRequestsForm";
import RequestsTable from "./subs/RequestsTable";

const Feedback = () => {
  return (
    <div className="size-full flex flex-col gap-4 sm:gap-6">
      <div className="w-full flex flex-col gap-3">
        <Typography variant="text" className="font-medium">
          Boards
        </Typography>
        <div className="w-full sm:w-[150px] h-[40px] flex items-center justify-between px-2 rounded-sm bg-gray-2">
          <Typography color="primary" variant="text" className="font-normal">
            Features Request
          </Typography>
        </div>
      </div>
      <FeaturesRequestsForm />
      <RequestsTable />
    </div>
  );
};

export default Feedback;
