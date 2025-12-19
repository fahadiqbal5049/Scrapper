"use client";

import React, { useState } from "react";
import ToggleButtonGroup from "@/components/shared/ToggleButtonGroup";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { Checkbox } from "@/components/ui/checkbox";
import VolumeInputField from "@/components/shared/form/VolumeInputField";
import { Plus, Minus } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TopicsFilter from "../../organicKeyWords/subs/TopicsFilter";
import { Button } from "@/components/ui/button";

const FilterPanel: React.FC = () => {
  const [filterMode, setFilterMode] = React.useState("filters");
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="w-full max-w-[400px] mx-auto h-fit flex flex-col bg-primary rounded-lg">
      <ToggleButtonGroup
        options={FilterModeOptions}
        value={filterMode}
        onChange={setFilterMode}
        className="border-b-[1px] border-[#4E4E4E]"
      />
      {filterMode === "filters" ? (
        <div className="w-full flex flex-col gap-2">
          <div className="w-full gap-5 p-3 flex flex-col">
            <div className="flex w-full flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <label htmlFor="">
                  <Typography
                    variant="p"
                    className="font-semibold"
                    color="primary"
                  >
                    Compare to Your Site’s Rank
                  </Typography>
                </label>
                <InputHelpTooltip />
              </div>
              <Input type="email" placeholder="Email" />
            </div>
            {/*  */}
            <div className="flex w-full mt-2 flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <label htmlFor="">
                  <Typography
                    variant="p"
                    className="font-semibold"
                    color="primary"
                  >
                    Keywords
                  </Typography>
                </label>
                <InputHelpTooltip />
              </div>
              <div className="w-full border-[1px] rounded-[2px] border-[#4E4E4E] grid grid-cols-[90px,1fr]">
                <div className="border-r-[1px] border-[#4E4E4E]">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Include" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="include">Include</SelectItem>
                        <SelectItem value="exclude">Exclude</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Input className="border-none" placeholder="Comma separated" />
              </div>
            </div>

            <VolumeInputField
              placeholder1="0"
              placeholder2="30,000,000"
              label="Search Volume"
              tooltipText="Search Volume"
            />
            <VolumeInputField
              placeholder1="0"
              placeholder2="30,000,000"
              label="CPC"
              tooltipText="Keyword Difficulty"
            />

            {/* show more + less toggle button ------->  */}

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex justify-start items-center gap-1"
            >
              {isCollapsed ? (
                <Minus className="text-white-2" size={18} />
              ) : (
                <Plus className="text-white-2" size={18} />
              )}

              <Typography variant="p" className="font-semibold" color="primary">
                {isCollapsed ? "Show Less" : "Show More"}
              </Typography>
            </button>
            {isCollapsed && (
              <div className="w-full flex flex-col gap-5">
                <VolumeInputField
                  placeholder1="-99"
                  placeholder2="99"
                  label="Ads"
                  tooltipText="Keyword Difficulty"
                />
                <VolumeInputField
                  placeholder1="0"
                  placeholder2="10.000,000"
                  label="Mobile Searches (Percent)"
                  tooltipText="Keyword Difficulty"
                />
                <VolumeInputField
                  placeholder1="$0"
                  placeholder2="$1000"
                  label="Paid Clicks (Percent)"
                  tooltipText="Keyword Difficulty"
                />
                <VolumeInputField
                  placeholder1="0%"
                  placeholder2="100%"
                  label="Monthly Cost"
                  tooltipText="Keyword Difficulty"
                />
                <VolumeInputField
                  placeholder1="0%"
                  placeholder2="100%"
                  label="Keyword Difficulty"
                  tooltipText="Keyword Difficulty"
                />
                <VolumeInputField
                  placeholder1="0%"
                  placeholder2="100%"
                  label="Clicks"
                  tooltipText="Keyword Difficulty"
                />
                <VolumeInputField
                  placeholder1="0%"
                  placeholder2="100%"
                  label="Desktop Searches (Percent)"
                  tooltipText="Keyword Difficulty"
                />
                <VolumeInputField
                  placeholder1="0%"
                  placeholder2="100%"
                  label="Searched Not Clicked (Percent)"
                  tooltipText="Keyword Difficulty"
                />
                <VolumeInputField
                  placeholder1="0%"
                  placeholder2="100%"
                  label="Organic Clicks (Percent)"
                  tooltipText="Keyword Difficulty"
                />

                {/* adult filters ---------------->   */}
                <div className="w-full flex flex-col gap-3">
                  <div className="w-full flex justify-between items-center">
                    <Typography
                      variant="p"
                      className="font-semibold"
                      color="primary"
                    >
                      Adult Filters
                    </Typography>
                    <InputHelpTooltip />
                  </div>
                  <RadioGroup defaultValue="Adult Filters (324 Hidden)">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Adult Filters (324 Hidden)"
                        id="Adult Filters (324 Hidden)"
                      />
                      <label htmlFor="Adult Filters (324 Hidden)">
                        <Typography variant="p" color="primary">
                          Adult Filters (324 Hidden)
                        </Typography>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Show only Adult Keywords"
                        id="Show only Adult Keywords"
                      />
                      <label htmlFor="Show only Adult Keywords">
                        <Typography variant="p" color="primary">
                          Show only Adult Keywords
                        </Typography>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Adult Filter Off"
                        id="Adult Filter Off"
                      />
                      <label htmlFor="Adult Filter Off">
                        <Typography variant="p" color="primary">
                          Adult Filter Off
                        </Typography>
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}
            <Button variant="primary">Apply</Button>
          </div>
        </div>
      ) : (
        <TopicsFilter />
      )}
    </div>
  );
};

export default FilterPanel;

export const FilterModeOptions = [
  { label: "Filters", value: "filters" },
  { label: "Topics", value: "topics" },
];
