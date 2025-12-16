import React from "react";
import Typography from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const Product: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <Typography className="font-medium" color="primary" variant="text">
        Products
      </Typography>
      <Input
        placeholder="Please chose if this rule must be applied to the whole catalog or only to certain products"
        className="bg-[#3A4249] w-full border-none h-[43px] rounded-md"
      />
      <div className="flex justify-start items-center">
        <RadioGroup
          className="flex md:flex-row flex-col gap-2 md:gap-10 items-start md:items-center"
          defaultValue="to all products"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              fillColor="fill-white-5"
              borderColor="border-white-5"
              textColor=""
              value="to all products"
              id="to all products"
            />
            <label htmlFor="to all products">
              <Typography variant="p" color="primary">
                to all products
              </Typography>
            </label>
          </div>
          <div className="flex md:space-y-0 gap-3 flex-wrap items-center space-x-2">
            <div className="flex items-center justify-center gap-2">
              <RadioGroupItem
                id="specific products"
                fillColor="fill-white-5"
                borderColor="border-white-5"
                value="specific products"
              />
              <label htmlFor="specific products">
                <Typography variant="p" color="primary">
                  specific products
                </Typography>
              </label>
            </div>
            <Input
              placeholder="Insert link of your product"
              className="min-h-[43px] min-w-[200px] border-none bg-gray-2 rounded-md"
            />
            <Button
              variant="gradientOutline"
              className="!text-orange-1 !rounded-[2px] !h-[26px] !text-[12px]"
              size="sm"
            >
              Add More Link
            </Button>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default Product;
