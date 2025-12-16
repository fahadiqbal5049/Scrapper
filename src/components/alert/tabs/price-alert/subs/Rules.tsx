"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Input } from "@/components/ui/input";

const Rules: React.FC = () => {
  // states ------->

  const [directonValue, setDirectionValue] = useState("");

  // actions -------------->

  const handleValueChange = (value: string) => {
    setDirectionValue(value);
  };

  return (
    <div className="flex flex-col gap-3">
      <Typography className="font-medium" color="primary" variant="text">
        Rules
      </Typography>
      <Typography variant="p" color="primary">
        Please select when the alert must be sent to you
      </Typography>
      <div className="flex flex-wrap py-1 justify-start items-center gap-3">
        <Typography variant="p" color="primary">
          When my
        </Typography>
        <CustomSelect
          options={CompetitorOptions}
          placeholder="Competitors"
          triggerStyles="border-white-2 rounded-[2px] h-[29px]"
        />
        <Typography variant="p" color="primary">
          Products
        </Typography>
        <CustomSelect
          options={PriceOptions}
          placeholder="Price"
          triggerStyles="border-white-2 min-w-[74px] rounded-[2px] h-[29px]"
        />
        <CustomSelect
          options={DirectionOptions}
          placeholder="Are"
          value={directonValue}
          onChange={handleValueChange}
          triggerStyles="border-white-2 min-w-[120px] rounded-[2px] h-[29px]"
        />
        {directonValue !== "goes-up" && directonValue !== "goes-down" && (
          <div className="flex flex-wrap items-center gap-3">
            <Input
              type="number"
              placeholder="10"
              className="border-white-2 w-[85px] rounded-[2px] h-[29px]"
            />
            <CustomSelect
              options={SymbolOptions}
              placeholder="$"
              triggerStyles="border-white-2 min-w-[60px] rounded-[2px] h-[29px]"
            />
            <CustomSelect
              options={ComparisionOptions}
              placeholder="Lower"
              triggerStyles="border-white-2 min-w-[90px] rounded-[2px] h-[29px]"
            />
            <Typography variant="p" color="primary">
              than mine
            </Typography>
          </div>
        )}
      </div>
      {/* examples ----->  */}
      <div className="flex flex-col gap-2">
        <Typography variant="p" color="primary">
          Example 1: If for your product X, priced 100 €, your competitor has a
          price of 90.00 € (-10.00 %): This rule is triggered
        </Typography>
        <Typography variant="p" color="primary">
          Example 1: If for your product X, priced 100 €, your competitor has a
          price of 90.00 € (-10.00 %): This rule is triggered
        </Typography>
        <Typography variant="p" color="primary">
          Example 1: If for your product X, priced 100 €, your competitor has a
          price of 90.00 € (-10.00 %): This rule is triggered
        </Typography>
      </div>
    </div>
  );
};

export default Rules;





export const CompetitorOptions = [
  {
    value: "cheapest-competitor",
    label: "Cheapest Competitor",
  },
  {
    value: "highest-competitor",
    label: "Highest Competitor",
  },
];

export const PriceOptions = [
  {
    value: "price",
    label: "Price",
  },
  {
    value: "stock",
    label: "Stock",
  },
];

export const DirectionOptions = [
  {
    value: "goes-up",
    label: "Goes Up",
  },
  {
    value: "goes-down",
    label: "Goes Down",
  },
  {
    value: "are",
    label: "Are",
  },
];

export const SymbolOptions = [
  {
    value: "%",
    label: "%",
  },
  {
    value: "€",
    label: "€",
  },
];

export const ComparisionOptions = [
  { value: "lower", label: "Lower" },

  { value: "higher", label: "Higher" },
];
