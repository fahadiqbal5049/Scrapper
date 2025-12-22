"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  OperatorOptions,
  UnitOptions,
  Step4ConditionOptions,
  Step4ComparisonOptions,
  Step4PriceOptions,
} from "@/data/repricingData";
import { Input } from "@/components/ui/input";
import ValuesSettingCard from "./ValuesSettingCard";
import clsx from "clsx";
import { ValuesSettingCardData } from "@/data/repricingData";

const StopCondition: React.FC = () => {
  // states --------->
  const [selectedCondition, setSelectedCondition] =
    useState<string>("no condition");
  const [addNewPrice, setAddPrice] = useState(false);
  const [priceOption, setPriceOption] = useState("my price");

  // actions -------------->

  const handleValueChange = (value: string) => {
    setSelectedCondition(value);
  };

  return (
    <div className="w-full flex gap-8 flex-col">
      <div className="flex px-5 flex-col gap-2">
        <div className="flex justify-start items-center gap-2">
          <Typography color="primary" variant="text">
            Step 4 - Stop Condition
          </Typography>
          <InputHelpTooltip helperText="stop condition" />
        </div>
        <Typography variant="small" color="primary">
          Choose when this rule must be halted
        </Typography>
        <div className="flex gap-4 flex-col">
          <div className="flex flex-wrap items-center gap-2">
            {selectedCondition === "new price" && (
              <Typography variant="p" color="primary">
                If
              </Typography>
            )}

            <CustomSelect
              value={selectedCondition}
              onChange={handleValueChange}
              placeholder="no condition"
              options={Step4ConditionOptions}
              triggerStyles="h-[29px] w-fit rounded-[2px]"
            />
            {selectedCondition === "new price" && (
              <div className="flex flex-wrap justify-start items-center gap-2">
                <Typography variant="p" color="primary">
                  is
                </Typography>

                <CustomSelect
                  placeholder="lower"
                  options={Step4ComparisonOptions}
                  triggerStyles="h-[29px] rounded-[2px]"
                />
                <Typography variant="p" color="primary">
                  than
                </Typography>
                <CustomSelect
                  placeholder="My Price"
                  options={Step4PriceOptions}
                  value={priceOption}
                  onChange={(value: string) => setPriceOption(value)}
                  triggerStyles="h-[29px] rounded-[2px]"
                />
                <Button
                  variant="outline"
                  onClick={() => setAddPrice(!addNewPrice)}
                  size="sm"
                  iconPosition="left"
                  className="border-orange-1 h-[29px] rounded-[2px] text-orange-1 hover:bg-transparent hover:border-orange-1 hover:text-orange-1"
                  icon={<Plus size={12} color="#F3941D" />}
                >
                  Add
                </Button>
              </div>
            )}
          </div>
          {addNewPrice && selectedCondition === "new price" && (
            <div className="flex pl-4 justify-start items-center gap-2">
              <CustomSelect
                options={OperatorOptions}
                placeholder="plus"
                triggerStyles="h-[29px] rounded-[2px]"
              />
              <Input
                type="number"
                placeholder="0.1"
                className="border-white-4 h-[29px] w-[70px]"
              />
              <CustomSelect
                options={UnitOptions}
                placeholder="$"
                triggerStyles="h-[29px] rounded-[2px]"
                size="w-[70px] "
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAddPrice(!addNewPrice)}
                iconPosition="left"
                className="border-orange-1 text-orange-1 h-[29px] hover:bg-transparent hover:border-orange-1 hover:text-orange-1 rounded-[2px]"
                icon={<Trash size={12} color="#F3941D" />}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* min-max values settings -------->  */}
      <div className="flex gap-3 py-11 flex-col">
        <div className="w-full px-5 grid justify-center items-center gap-2 grid-cols-[1fr,auto,1fr]">
          <hr className="w-full border-white-3" />
          <Typography variant="p" color="primary">
            Min/Max Values Settings
          </Typography>
          <hr className="w-full border-white-3" />
        </div>
        <div
          className={clsx(
            "w-full relative p-5",
            (priceOption === "min price" || priceOption === "max price") &&
              "border-l-[1px] border-r-[1px] border-b-[1px] border-white-3"
          )}
        >
          <div className="w-full grid gap-4 grid-cols-2 sm:grid-cols-5">
            {ValuesSettingCardData.map((item, index) => {
              return (
                <ValuesSettingCard
                  title={item.title}
                  key={index}
                  des={item.des}
                  icon={item.icon}
                />
              );
            })}
          </div>
          {/* overly */}
          <div
            className={clsx(
              "w-full h-full transition-opacity duration-200 flex justify-center items-center  bg-[#1F2529]/95 absolute left-0 top-0",
              priceOption === "min price" || priceOption === "max price"
                ? "opacity-0"
                : "opacity-100"
            )}
          >
            <Typography
              className="text-[22px] font-black text-center"
              color="primary"
            >
              Please select Min / Max / Min-Max as stop condition to enable this
              section
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopCondition;
