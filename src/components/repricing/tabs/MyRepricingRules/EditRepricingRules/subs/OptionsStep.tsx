import React from "react";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { Switch } from "@/components/ui/switch";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Input } from "@/components/ui/input";
import { UnitOptions, OperatorOptions } from "@/data/repricingData";

const OptionsStep: React.FC = () => {
  return (
    <div className="w-full flex gap-2 flex-col px-5">
      <div className="flex justify-start items-center gap-2">
        <Typography color="primary" variant="text">
          Step 8 - Options
        </Typography>
        <InputHelpTooltip helperText="options to products" />
      </div>
      <Typography variant="small" color="primary">
        Options to let your prices be more attractive. Note: The options are
        applied BEFORE the stop condition analysis
      </Typography>
      <div className="flex items-center space-x-2">
        <Switch
          width="w-[25px]"
          height="h-[13px]"
          thumbHeight="h-[9px]"
          thumbWidth="w-[9px]"
          thumbStyles="data-[state=checked]:translate-x-3"
          id="Adjust calculated prices"
        />
        <label htmlFor="Adjust calculated prices">
          <Typography variant="p" color="primary">
            Adjust calculated prices
          </Typography>
        </label>
      </div>
      <div className="w-full px-6 bg-[#294746] mt-4 flex flex-col gap-5 py-4">
        <div className="flex items-center gap-2">
          <Typography variant="p" color="primary">
            New Price{" "}
          </Typography>
          <CustomSelect
            placeholder="Plus"
            triggerStyles="h-[29px] rounded-[2px] border-white-4"
            options={OperatorOptions}
          />
          <Input
            placeholder="20"
            className="h-[29px] border-white-4 w-[80px] rounded-[2px]"
          />
          <CustomSelect
            placeholder="%"
            triggerStyles="h-[29px] rounded-[2px] border-white-4"
            options={UnitOptions}
          />
        </div>
        <Typography variant="p" color="primary">
          Example: If the repricing rule sets the new price at € 10, 123 Scraper
          will list the price as € 12 on your platform.{" "}
        </Typography>
      </div>
      <div className="flex mt-4 items-center space-x-2">
        <Switch
          width="w-[25px]"
          height="h-[13px]"
          thumbHeight="h-[9px]"
          thumbWidth="w-[9px]"
          thumbStyles="data-[state=checked]:translate-x-3"
          id="End repriced product prices"
        />
        <label htmlFor="End repriced product prices">
          <Typography variant="p" color="primary">
            End repriced product prices
          </Typography>
        </label>
      </div>
      <div className="w-full px-6 bg-[#294746] mt-4 flex flex-col gap-5 py-4">
        <div className="flex items-center gap-2">
          <Typography variant="p" color="primary">
            New Price{" "}
          </Typography>
          <div className="w-[120px] border-[1px] border-white-4 rounded-[2px] grid grid-cols-[48px,1fr]">
            <Input
              placeholder="XX"
              className="w-full border-l-[0px] border-t-[0px] border-b-[0px] border-r-[1px] border-white-4 h-full"
            />
            <Input placeholder="99" className="w-full h-full border-none" />
          </div>
        </div>
        <Typography variant="p" color="primary">
          Example: If the repricing rule sets the new price at € 18.90, 123
          Scraper will list the price as € 18.99 on your platform.{" "}
        </Typography>
      </div>
      <div className="flex mt-4 items-center space-x-2">
        <Switch
          width="w-[25px]"
          height="h-[13px]"
          thumbHeight="h-[9px]"
          thumbWidth="w-[9px]"
          thumbStyles="data-[state=checked]:translate-x-3"
          id="Use last extracter price"
        />
        <label htmlFor="Use last extracter price">
          <Typography variant="p" color="primary">
            Use last extracter price
          </Typography>
        </label>
      </div>
      <Typography variant="p" color="primary" className="pl-[2rem]">
        Enabling this option, 123 Scraper will consider competitos whose status
        is Missing price, using the last extracted price.
      </Typography>
    </div>
  );
};

export default OptionsStep;
