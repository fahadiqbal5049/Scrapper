import React from "react";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ExportTypeOptions } from "@/data/repricingData";
import CopyText from "@/components/shared/CopyText";

const ExportStep: React.FC = () => {
  return (
    <div className="w-full flex gap-2 flex-col px-5">
      <div className="flex justify-start items-center gap-2">
        <Typography color="primary" variant="text">
          Step 9 - Export
        </Typography>
        <InputHelpTooltip helperText="Apply to products" />
      </div>
      <Typography variant="p" color="primary">
        Choose if you want to export your repricing data on a web url
      </Typography>
      <div className="w-full px-6 bg-[#294746] mt-4 flex flex-col gap-4 py-4">
        <div className="flex  items-center space-x-2">
          <Switch
            width="w-[25px]"
            height="h-[13px]"
            thumbHeight="h-[9px]"
            thumbWidth="w-[9px]"
            thumbStyles="data-[state=checked]:translate-x-3"
            id="Email"
          />
          <label htmlFor="Email" className="flex flex-wrap items-center gap-2">
            <Typography variant="p" className="text-white-4">
              Email
            </Typography>
            <Typography variant="p" color="primary">
              john@gmail.com
            </Typography>
            <Typography
              variant="p"
              className="text-success-2 bg-success-2/10 shrink-0 rounded-full px-2 py-1"
            >
              Upgrade to unlock
            </Typography>
          </label>
        </div>
        <div className="flex  items-center space-x-2">
          <Switch
            width="w-[25px]"
            height="h-[13px]"
            thumbHeight="h-[9px]"
            thumbWidth="w-[9px]"
            thumbStyles="data-[state=checked]:translate-x-3"
            id="slack"
          />
          <label htmlFor="slack" className="flex items-center gap-2">
            <Typography variant="p" color="primary">
              Slack
            </Typography>
          </label>
        </div>
        {/* export format ----------> */}
        <div className="flex flex-col gap-4">
          <Typography variant="p" color="primary">
            Export Format
          </Typography>
          <RadioGroup defaultValue="CSV" className="w-full flex gap-3">
            {ExportTypeOptions.map((item: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  className="size-[18px]"
                  value={item}
                  id={item}
                />
                <label htmlFor={item}>
                  <Typography variant="small" color="secondary">
                    {item}
                  </Typography>
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
        {/* public download link ------> */}
        <div className="flex flex-col gap-4">
          <Typography variant="p" color="primary">
            Public Download Link
          </Typography>
          <CopyText />
        </div>
      </div>
    </div>
  );
};

export default ExportStep;
