import React from "react";
import Typography from "@/components/ui/typography";
import { Input } from "@/components/ui/input";


const RuleName: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Typography className="font-medium" color="primary" variant="text">
        Rule Name
      </Typography>
      <Input
        placeholder="My competitors are 5% cheaper than me"
        className="bg-[#3A4249] w-full border-none h-[43px] rounded-md"
      />
    </div>
  );
};

export default RuleName;
