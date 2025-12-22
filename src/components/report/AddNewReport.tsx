"use client";

import React, { useState } from "react";
import AddNewReportHeader from "./subs/AddNewReportHeader";
import Typography from "../ui/typography";
import { Input } from "../ui/input";
import CustomSelect from "../shared/form/CustomSelect";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ExportTypeOptions } from "@/data/repricingData";
import clsx from "clsx";
import { Switch } from "../ui/switch";
import CopyText from "../shared/CopyText";
import {
  InitialOptions,
  IsOptions,
  OrOptions,
  ColumnsData,
  FrequencyOptions,
} from "@/data/reportData";
import { Button } from "../ui/button";
import UpgradeDialog from "../shared/modals/UpgradeDialog";
import SelectDayDialog from "./modals/SelectDayDialog";

const AddNewReport: React.FC = () => {
  // states --------------->
  const [isUpgrade, setIsUpgrade] = useState(false);
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="w-full flex gap-6 flex-col">
        <AddNewReportHeader />
        <div className="w-full bg-primary gap-5 sm:gap-7 rounded-lg py-8 px-5 flex flex-col">
          {/* name */}
          <div className="flex flex-col gap-2">
            <Typography color="primary" variant="text">
              Name
            </Typography>
            <Typography color="primary" variant="small">
              Please enter a recognizable name for this report
            </Typography>
            <Input className="bg-[#3A4249] w-full border-none h-[43px] rounded-md" />
          </div>
          {/* filter set ---> */}
          <div className="w-full flex flex-col gap-2">
            <Typography color="primary" variant="text">
              Filters Set
            </Typography>
            <Typography color="primary" variant="small">
              Choose a filters set
            </Typography>
            <div className="flex flex-wrap justify-start items-center gap-2">
              <CustomSelect
                triggerStyles="h-[29px] border-white-2 rounded-[2px] min-w-[177px]"
                options={InitialOptions}
                placeholder="Intials"
              />
              <CustomSelect
                triggerStyles="h-[29px] rounded-[2px] border-white-2 min-w-[147px]"
                options={IsOptions}
                placeholder="IS"
              />
              <Input className="h-[29px] rounded-[2px] min-w-[147px] border-white-2 focus:border-white-2" />
              <CustomSelect
                triggerStyles="h-[29px] rounded-[2px] border-white-2 min-w-[147px]"
                options={OrOptions}
                placeholder="OR"
              />
            </div>
          </div>
          {/* columns ----> */}
          <div className="w-full flex flex-col gap-4">
            <Typography color="primary" variant="text">
              Columns
            </Typography>
            <div className="grid max-w-[950px] w-full gap-y-4 xs:gap-y-6 sm:gap-y-8 gap-x-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {ColumnsData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full gap-4 xs:gap-5 flex flex-col"
                  >
                    {item.checkboxses.map((checkData, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-start items-center gap-2"
                        >
                          <Checkbox
                            className="w-[18px] h-[18px]"
                            iconSize="w-4 h-4"
                            id={checkData}
                          />
                          <label
                            htmlFor={checkData}
                            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            <Typography variant="p" color="primary">
                              {checkData}
                            </Typography>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          {/* format ----> */}
          <div className="flex flex-col gap-2">
            <Typography color="primary" variant="text">
              Format
            </Typography>
            <Typography color="primary" variant="small">
              Choose a filters set
            </Typography>
            <RadioGroup defaultValue="CSV" className="w-full flex gap-3">
              {ExportTypeOptions.map((item: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="size-[18px]"
                    value={item}
                    textColor="text-white-2"
                    borderColor="border-white-2"
                    fillColor="fill-white-2"
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
          {/* Frequency ----> */}
          <div className="flex flex-col gap-2">
            <Typography color="primary" variant="text">
              Frequency
            </Typography>
            <Typography color="primary" variant="small">
              Please select the frequency
            </Typography>
            <RadioGroup
              fillColor="fill-success-1"
              borderColor="border-success-1"
              textColor="text-success-1"
              defaultValue="Semi-Automatic"
              className="w-full flex-col flex gap-2"
            >
              {FrequencyOptions.map((item, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "flex items-center space-x-2",
                    index === 0 && "mb-1"
                  )}
                >
                  <RadioGroupItem
                    className="size-[18px]"
                    value={item.value}
                    id={item.value}
                    fillColor="fill-success-1"
                    borderColor="border-success-1"
                  />
                  <div
                    className={clsx(
                      "flex justify-between items-center gap-2",
                      isUpgrade ? "max-w-[270px] w-full" : "w-fit"
                    )}
                  >
                    <label
                      htmlFor={item.value}
                      className="flex justify-start items-center gap-2"
                    >
                      <Typography variant="small" color="primary">
                        {item.label}
                      </Typography>
                    </label>
                    {isUpgrade ? (
                      <SelectDayDialog />
                    ) : (
                      <div>
                        {index !== 0 && (
                          <button
                            onClick={() =>
                              setIsUpgradeDialogOpen(!isUpgradeDialogOpen)
                            }
                          >
                            <Typography
                              variant="small"
                              className="text-success-2 shrink-0 bg-success-2/10 rounded-full px-2 py-1"
                            >
                              Upgrade to unlock
                            </Typography>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
          {/* Communication Channels */}
          <div className="flex flex-col gap-2">
            <Typography color="primary" variant="text">
              Communication Channels
            </Typography>
            <Typography color="primary" variant="small">
              Please select how you prefer to receive these alerts
            </Typography>
            <div className="flex  items-center space-x-2">
              <Switch
                width="w-[25px]"
                height="h-[13px]"
                thumbHeight="h-[9px]"
                thumbWidth="w-[9px]"
                thumbStyles="data-[state=checked]:translate-x-3"
                id="Email"
              />
              <div className="flex justify-center items-center gap-2">
                <label
                  htmlFor="Email"
                  className="flex flex-wrap items-center gap-2"
                >
                  <Typography variant="p" className="text-white-4">
                    Email
                  </Typography>
                  <Typography variant="p" color="primary">
                    john@gmail.com
                  </Typography>
                </label>
                <button
                  onClick={() => setIsUpgradeDialogOpen(!isUpgradeDialogOpen)}
                >
                  <Typography
                    variant="small"
                    className="text-success-2 shrink-0 bg-success-2/10 rounded-full px-2 py-1"
                  >
                    Upgrade to unlock
                  </Typography>
                </button>
              </div>
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
          </div>
          {/* public download link -----> */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Typography color="primary" variant="text">
                Public Download Link
              </Typography>
              <button
                onClick={() => setIsUpgradeDialogOpen(!isUpgradeDialogOpen)}
              >
                <Typography
                  variant="small"
                  className="text-success-2 shrink-0 bg-success-2/10 rounded-full px-2 py-1"
                >
                  Upgrade to unlock
                </Typography>
              </button>
            </div>
            <Typography color="primary" variant="small">
              Post your report data file on a public URL
            </Typography>
            <div className="flex  items-center space-x-2">
              <Switch
                width="w-[25px]"
                height="h-[13px]"
                thumbHeight="h-[9px]"
                thumbWidth="w-[9px]"
                thumbStyles="data-[state=checked]:translate-x-3"
                id="active"
              />
              <div className="flex justify-center items-center gap-2">
                <label htmlFor="active">
                  <Typography variant="p" className="text-white-4">
                    Active
                  </Typography>
                </label>
              </div>
            </div>
            {/* copy text */}
            <CopyText />
          </div>
        </div>
      </div>
      <UpgradeDialog
        isManual={isUpgradeDialogOpen}
        handleManualChange={() => setIsUpgradeDialogOpen(false)}
        successEvent={() => setIsUpgrade(true)}
      />
    </React.Fragment>
  );
};

export default AddNewReport;
