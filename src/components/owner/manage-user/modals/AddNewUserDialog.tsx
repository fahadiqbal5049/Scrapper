"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { AddApps, RoleOptions } from "@/data/owner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const AddNewUserDialog: React.FC = () => {
  // states
  const [selectedApps, setSelectedApps] = useState<string[]>([]);

  // actions
  const handleAppSelection = (app: string) => {
    setSelectedApps((prev) =>
      prev.includes(app) ? prev.filter((item) => item !== app) : [...prev, app]
    );
  };

  const handleRemoveApp = (app: string) => {
    setSelectedApps((prev) => prev.filter((item) => item !== app));
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-sm flex justify-center items-center bg-orange-gradient text-white-1 h-8 px-3 text-xs">
          Add New User
        </div>
      </DialogTrigger>
      <DialogContent className="md:min-w-[560px] py-8 flex flex-col gap-6 max-h-[95dvh] !overflow-y-auto max-w-[90%] md:max-w-[560px] w-[90%] bg-primary border-none rounded-3xl">
        <DialogTitle className="hidden"></DialogTitle>
        {/* full name */}
        <div className="w-full grid grid-cols-[100px,1fr] md:grid-cols-[120px,1fr]">
          <Typography className="text-white-4 text-sm font-normal">
            Full Name
          </Typography>
          <div className="w-full grid grid-cols-2 gap-4">
            <Input
              className="w-full h-[28px] bg-[#3A4249] rounded-sm border-none"
              placeholder="Louisa"
            />
            <Input
              className="w-full h-[28px] bg-[#3A4249] rounded-sm border-none"
              placeholder="Rebecca"
            />
          </div>
        </div>
        {/* email */}
        <div className="w-full grid grid-cols-[100px,1fr] md:grid-cols-[120px,1fr]">
          <Typography className="text-white-4 text-sm font-normal">
            Email Address
          </Typography>
          <Input
            type="email"
            className="w-full h-[28px] bg-[#3A4249] rounded-sm border-none"
            placeholder="louisa.reb@gmail.com"
          />
        </div>
        {/* role  */}
        <div className="w-full grid grid-cols-[100px,1fr] md:grid-cols-[120px,1fr]">
          <Typography className="text-white-4 text-sm font-normal">
            Role
          </Typography>
          <CustomSelect
            options={RoleOptions}
            triggerStyles="w-full h-[28px] bg-[#3A4249] border-none"
          />
        </div>
        {/* add app  */}
        <div className="w-full grid grid-cols-[100px,1fr] md:grid-cols-[120px,1fr]">
          <Typography className="text-white-4 text-sm font-normal">
            Add App
          </Typography>
          <div className="w-full flex flex-col gap-2">
            <Popover>
              <PopoverTrigger
                className="cursor-pointer w-full bg-[#3A4249] px-2 border-[1px] border-none rounded-sm h-[28px]"
                asChild
              >
                <div className="flex justify-between items-center gap-1">
                  <Typography variant="p" color="primary">
                    Add App
                  </Typography>
                  <ChevronDown size={20} className="text-white-2" />
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="flex w-full bg-secondary items-start rounded-sm border-transparent px-2 py-1 flex-col gap-3"
              >
                {AddApps.map((item, index) => {
                  return (
                    <div key={index} className="flex w-full items-center gap-2">
                      <Checkbox
                        id={item}
                        checked={selectedApps.includes(item)}
                        onCheckedChange={() => handleAppSelection(item)}
                      />
                      <label
                        htmlFor={item}
                        className="text-sm text-white-2 font-normal"
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </PopoverContent>
            </Popover>
            {/* selected app */}
            <div className="flex flex-wrap items-center gap-2">
              {selectedApps.map((app, index) => (
                <div
                  key={index}
                  className="flex border-[1px] border-white-2 rounded-sm px-1 py-[2px] items-center gap-2"
                >
                  <Typography variant="small" color="primary">
                    {app}
                  </Typography>
                  <button onClick={() => handleRemoveApp(app)}>
                    <Trash size={16} className="text-white-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-5">
          <DialogClose>
            <div className="rounded-sm border hover:text-neutral-900 px-3 text-xs flex justify-center items-center border-white-2 bg-transparent text-white-2 hover:border-transparent shadow-sm hover:bg-neutral-100 w-[170px] h-[28px]">
              Cancel
            </div>
          </DialogClose>
          <Button
            variant="orangeGradient"
            size="sm"
            className="rounded-sm w-[170px] h-[28px]"
          >
            Accept
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewUserDialog;
