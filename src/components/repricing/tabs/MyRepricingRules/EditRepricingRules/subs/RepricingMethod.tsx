import React from "react";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RepricingMethodOptions, TimeOptions } from "@/data/repricingData";
import { Checkbox } from "@/components/ui/checkbox";
import CustomSelect from "@/components/shared/form/CustomSelect";

const RepricingMethod: React.FC = () => {
  return (
    <div className="w-full flex gap-2 flex-col px-5">
      <div className="flex justify-start items-center gap-2">
        <Typography color="primary" variant="text">
          Step 7 - Repricing Method
        </Typography>
        <InputHelpTooltip helperText="Apply to products" />
      </div>
      <Typography variant="small" color="primary">
        Choose if 123 Scraper will apply the new price automatically on your
        platform or will just suggest it
      </Typography>
      <RadioGroup
        defaultValue="Semi-Automatic"
        className="w-full flex-col flex gap-2"
      >
        {RepricingMethodOptions.map((item, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem
              className="size-[18px]"
              value={item.value}
              id={item.value}
            />
            <label
              htmlFor={item.value}
              className="flex justify-start items-center gap-2"
            >
              <Typography variant="small" color="primary">
                {item.label}
              </Typography>
              {index === 0 && (
                <Typography
                  variant="small"
                  className="text-success-2 shrink-0 bg-success-2/10 rounded-full px-2 py-1"
                >
                  Upgrade to unlock
                </Typography>
              )}
            </label>
          </div>
        ))}
      </RadioGroup>
      <div className="w-full px-6 bg-[#294746] mt-4 flex flex-col gap-1 py-4">
        <div className="flex justify-start items-center gap-2">
          <Checkbox
            className="w-[18px] h-[18px]"
            iconSize="w-4 h-4"
            id="Every time a catalog import terminates"
          />
          <label htmlFor="Every time a catalog import terminates">
            <Typography
              variant="small"
              color="primary"
              className="leading-[35px]"
            >
              Every time a catalog import terminates{" "}
            </Typography>
          </label>
        </div>
        <div className="flex justify-start items-center gap-2">
          <Checkbox
            className="w-[18px] h-[18px]"
            iconSize="w-4 h-4"
            id="Everyday at"
          />
          <label
            htmlFor="Everyday at"
            className="flex justify-center gap-2 items-center"
          >
            <Typography
              variant="small"
              color="primary"
              className="leading-[35px]"
            >
              Everyday at
            </Typography>
            <CustomSelect
              placeholder="7:00 AM"
              triggerStyles="h-[29px] border-white-4"
              options={TimeOptions}
            />
            <Typography
              variant="small"
              color="primary"
              className="leading-[35px]"
            >
              Europe/Amsterdam
            </Typography>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RepricingMethod;
