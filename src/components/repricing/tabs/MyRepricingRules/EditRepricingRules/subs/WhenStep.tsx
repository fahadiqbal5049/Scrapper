"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import CustomSelect from "@/components/shared/form/CustomSelect";

const WhenStep: React.FC = () => {
  // states --------->
  const [selectedCondition, setSelectedCondition] =
    useState<string>("no condition");

  // actions -------------->

  const handleValueChange = (value: string) => {
    setSelectedCondition(value);
  };

  return (
    <div className="flex px-5 flex-col gap-2">
      <div className="flex justify-start items-center gap-2">
        <Typography color="primary" variant="text">
          Step 3 - When
        </Typography>
        <InputHelpTooltip helperText="rule name" />
      </div>
      <Typography variant="small" color="primary">
        Select which additional condition triggers this rule
      </Typography>

      <div className="flex justify-start items-center gap-2">
        <CustomSelect
          value={selectedCondition}
          onChange={handleValueChange}
          placeholder="no condition"
          options={ConditionOptions}
          triggerStyles="h-[29px] rounded-[2px]"
        />
        {selectedCondition === "when" && (
          <div className="flex justify-start items-center gap-2">
            <Typography variant="p" color="primary">
              Cheapest Competitor Product is
            </Typography>
            <CustomSelect
              options={StockStatusOptions}
              triggerStyles="h-[29px] rounded-[2px]"
            />
          </div>
        )}
      </div>
      {selectedCondition === "when" && (
        <Typography variant="p" color="primary">
          This repricing rule will run if the competitor's product is IN STOCK
        </Typography>
      )}
    </div>
  );
};

export default WhenStep;




const ConditionOptions = [
  {
    value: "no condition",
    label: "No Condition",
  },
  {
    value: "when",
    label: "When",
  },
];

const StockStatusOptions = [
  {
    value: "in stock",
    label: "In Stock",
  },
  {
    value: "out of stock",
    label: "Out Of Stock",
  },
];
