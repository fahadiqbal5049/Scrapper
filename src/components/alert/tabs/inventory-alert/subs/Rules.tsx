"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import CustomSelect from "@/components/shared/form/CustomSelect";


const Rules: React.FC = () => {
  // states ------->

  const [inclusionValue, setInclusionValue] = useState("");
  const [comparisionValue, setComparisionValue] = useState("");

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
          If
        </Typography>
        <CustomSelect
          options={StockOptions}
          placeholder="My Stock"
          triggerStyles="border-white-2 rounded-[2px] h-[29px]"
        />

        <CustomSelect
          options={InclusionOptions}
          placeholder="And"
          value={inclusionValue}
          onChange={(value) => setInclusionValue(value)}
          triggerStyles="border-white-2 min-w-[74px] rounded-[2px] h-[29px]"
        />
        {inclusionValue !== "-" && (
          <div className="flex flex-wrap items-center gap-3">
            <CustomSelect
              options={ExpiredDateOptions}
              placeholder="Expired date"
              triggerStyles="border-white-2 min-w-[120px] rounded-[2px] h-[29px]"
            />

            <CustomSelect
              options={PurchasedDateOptions}
              placeholder="Purchased date"
              triggerStyles="border-white-2 min-w-[60px] rounded-[2px] h-[29px]"
            />
            <CustomSelect
              options={ComparisionOptions}
              placeholder="Is equal to"
              value={comparisionValue}
              onChange={(value) => setComparisionValue(value)}
              triggerStyles="border-white-2 min-w-[90px] rounded-[2px] h-[29px]"
            />
            {comparisionValue !== "empty" && (
              <div className="flex items-center gap-3">
                <Typography variant="p" color="primary">
                  than
                </Typography>
                <CustomSelect
                  options={AlertOptions}
                  placeholder="Give alert"
                  triggerStyles="border-white-2 min-w-[200px] rounded-[2px] h-[29px]"
                />
              </div>
            )}
          </div>
        )}
      </div>
      {/* examples ----->  */}
      <div className="flex flex-col gap-2">
        <Typography variant="p" color="primary">
          Example 1: Based on my purchased date enter the expired date
          automatically adding X amount of days to the purchase date.
        </Typography>
        <Typography variant="p" color="primary">
          Example 2: If Expired date is within 14 days give me an alert.
        </Typography>
        <Typography variant="p" color="primary">
          Example 3: If my stock is below X amount give me an alert
        </Typography>
      </div>
    </div>
  );
};

export default Rules;

export const StockOptions = [
  {
    value: "my-stock",
    label: "My stock",
  },
  {
    value: "expired-date",
    label: "Expired date",
  },
  {
    value: "purchased-date",
    label: "Purchased date",
  },
  {
    value: "current-date",
    label: "Current date",
  },
  {
    value: "no. of stock",
    label: "No. of stock",
  },
  {
    value: "no. of sold items",
    label: "No. of sold items",
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

export const InclusionOptions = [
  {
    value: "and",
    label: "And",
  },
  {
    value: "or",
    label: "OR",
  },
  {
    value: "-",
    label: "-",
  },
];

export const ComparisionOptions = [
  { value: "is-equal-to", label: "is equal to" },

  { value: "is-greater-than", label: "is greater than" },
  { value: "is-less-than", label: "is less than" },
  { value: "contains", label: "Contains" },
  { value: "empty", label: "Empty" },
];

export const ExpiredDateOptions = [
  {
    value: "expired-date",
    label: "Expired date",
  },
  {
    value: "purchased-date",
    label: "Purchased date",
  },
  {
    value: "current-date",
    label: "Current date",
  },
  {
    value: "No. of stock",
    label: "No. of stock",
  },
  {
    value: "No. of sold items",
    label: "No. of sold items",
  },
];

export const PurchasedDateOptions = [
  {
    value: "purchased-date",
    label: "Purchased date",
  },
  {
    value: "expired-date",
    label: "Expired date",
  },
  {
    value: "select-amount",
    label: "Select amount",
  },
  {
    value: "select-date",
    label: "select date",
  },
];

export const AlertOptions = [
  {
    value: "give-alert",
    label: "Give alert",
  },
  {
    value: "enable",
    label: "Enable",
  },
  {
    value: "disable",
    label: "Disable",
  },
  {
    value: "remove",
    label: "Remove",
  },
  {
    value: "calculate & enter expired date",
    label: "Calculate & enter expired date",
  },
];
