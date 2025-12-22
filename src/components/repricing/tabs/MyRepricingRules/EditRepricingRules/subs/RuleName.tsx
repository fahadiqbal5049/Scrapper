import React from "react";
import Typography from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";

const RuleName: React.FC = () => {
  return (
    <div className="flex px-5 flex-col gap-2">
      <div className="flex justify-start items-center gap-2">
        <Typography color="primary" variant="text">
          Step 1 - Rule Name
        </Typography>
        <InputHelpTooltip helperText="rule name" />
      </div>
        <Typography color="primary" variant="small">Please enter a recognizable name for this rule</Typography>
        <Input placeholder="Reprice 1 cent below my cheapest competitor" className="bg-[#3A4249] w-full border-none h-[43px] rounded-md"/>
    </div>
  );
};

export default RuleName;
