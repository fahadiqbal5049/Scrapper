"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import {
  UnitOptions,
  ComparsionOptions,
  CompetitorOptions,
  OperatorOptions,
} from "@/data/repricingData";

const RepricingStep: React.FC = () => {
  const [addNewPrice, setAddPrice] = useState(false);

  return (
    <div className="flex px-5 flex-col gap-2">
      <div className="flex justify-start items-center gap-2">
        <Typography color="primary" variant="text">
          Step 2 - Repricing
        </Typography>
        <InputHelpTooltip helperText="repricing rule" />
      </div>
      <Typography variant="small" color="primary">
        Select what actions we must perform on your prices
      </Typography>
      <div className="flex justify-center items-start gap-2">
        <Typography variant="p" color="primary" className="mt-1">
          Set new price
        </Typography>
        <div className="flex flex-col flex-grow gap-4">
          <div className="flex flex-grow flex-wrap justify-start items-center gap-2">
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
            <CustomSelect
              options={ComparsionOptions}
              placeholder="below"
              triggerStyles="h-[29px] rounded-[2px]"
            />
            <Typography variant="p" color="primary">
              my
            </Typography>
            <CustomSelect
              options={CompetitorOptions}
              placeholder="cheapest competitor"
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
          {addNewPrice && (
            <div className="flex justify-start items-center gap-2">
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
      <Typography variant="small" color="primary">
        A product with a price of € 10.00 and a cheapest competitor price of €
        9.50 will be repriced € 0.10 below his price, at € 9.40
      </Typography>
    </div>
  );
};

export default RepricingStep;
