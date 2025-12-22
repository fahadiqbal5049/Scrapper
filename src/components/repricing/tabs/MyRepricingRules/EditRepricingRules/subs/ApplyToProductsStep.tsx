import React from "react";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { Filter } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import SearchComponent from "@/components/shared/SearchComponent";
import * as Icons from "@/svg/Icons";
import AdvanceFilterDialog from "./AdvanceFilterDialog";

const ApplyToProductsStep: React.FC = () => {
  return (
    <div className="w-full flex gap-2 flex-col px-5">
      <div className="flex justify-start items-center gap-2">
        <Typography color="primary" variant="text">
          Step 5 - Apply to products
        </Typography>
        <InputHelpTooltip helperText="Apply to products" />
      </div>
      <Typography variant="small" color="primary">
        Select which product(s) must be considered or excluded
      </Typography>
      <div className="flex mb-5 justify-start items-center gap-5">
        <Typography variant="p" color="primary">
          Apply to
        </Typography>
        <AdvanceFilterDialog />
        <div className="flex items-center space-x-2">
          <Switch
            width="w-[25px]"
            height="h-[13px]"
            thumbHeight="h-[9px]"
            thumbWidth="w-[9px]"
            thumbStyles="data-[state=checked]:translate-x-3"
            id="select-all-products"
          />
          <label htmlFor="select-all-products">
            <Typography variant="p" color="primary">
              Select all products
            </Typography>
          </label>
        </div>
      </div>
      <SearchComponent placeholder="Search" size="max-w-[307px] w-full" />
      <Typography variant="small" color="primary">
        Please use the search bar to search your products.
      </Typography>
      {/* all products -------> */}
      <div className="w-full mt-5 max-w-[540px] flex flex-col gap-4">
        <div className="w-full flex justify-between">
          <Typography variant="small" color="primary">
            Selected Products
          </Typography>
          <div className="flex items-center space-x-2">
            <Switch
              width="w-[25px]"
              height="h-[13px]"
              thumbHeight="h-[9px]"
              thumbWidth="w-[9px]"
              thumbStyles="data-[state=checked]:translate-x-3"
              id="select-all-products"
            />
            <label htmlFor="select-all-products">
              <Typography variant="p" color="primary">
                Include these products in this rule
              </Typography>
            </label>
          </div>
        </div>
        <div className="w-full rounded-lg min-h-[270px] flex justify-center items-center bg-[#294846]">
          <div className="flex justify-center items-center gap-2">
            <Icons.tshirt fill="fill-[#FAFAFA]" />
            <Typography className="text-[22px] text-white-4 font-bold">
              All Products
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyToProductsStep;
