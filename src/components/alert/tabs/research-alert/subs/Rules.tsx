import React from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const Rules: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Typography className="font-medium" color="primary" variant="text">
        Rules
      </Typography>
      <div className="flex gap-2 flex-col">
        <Typography variant="p" color="primary">
          Please select when the alert must be sent to you
        </Typography>
        <div className="flex flex-wrap items-center gap-4">
          <Typography variant="p" color="primary">
            If
          </Typography>
          <div className="min-w-[137px] flex justify-center items-center px-2 min-h-[42px] bg-[#3A4249] rounded-md">
            <Typography variant="p" color="primary">
              Enter Keyword
            </Typography>
          </div>
          <Typography variant="p" color="primary">
            on
          </Typography>
          <div className="min-w-[137px] flex justify-center items-center px-2 min-h-[42px] bg-[#3A4249] rounded-md">
            <Typography variant="p" color="primary">
              Enter Domain
            </Typography>
          </div>
          <Typography variant="p" color="primary">
            than
          </Typography>
          <Button variant="outline">Give an alert</Button>
        </div>
      </div>
      <Typography variant="p" color="primary">
        Example : If the word Sneaker is mentioned on this domain give me an
        alert
      </Typography>
    </div>
  );
};

export default Rules;
