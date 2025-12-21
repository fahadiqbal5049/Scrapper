"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/shared/form/CustomSelect";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { RoleOptions, AddApps } from "@/data/owner";

const EditUser: React.FC = () => {
  // states
  const [selectedApps, setSelectedApps] = React.useState<string[]>([]);

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
    <div className="size-full flex flex-col items-start justify-start gap-4 sm:gap-5 lg:gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/owner/manage-user">Users</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Edit User</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full gap-5 bg-primary rounded-lg pb-4 flex flex-col">
        <div className="w-full py-3 border-b-[1px] border-white-4/20 px-4">
          <Typography variant="text" className="text-white-4 font-medium">
            Edit User
          </Typography>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 px-4">
          {/* 1st col  */}
          <div className="w-full flex flex-col gap-4">
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
                        <div
                          key={index}
                          className="flex w-full items-center gap-2"
                        >
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
            <div className="flex items-center gap-2">
              <label
                className="text-sm text-white-4 "
                htmlFor="enable-user/dsable-user"
              >
                Enable User / Disable User
              </label>
              <Switch
                width="w-[28px]"
                height="h-[14px]"
                thumbHeight="h-[10px]"
                thumbWidth="w-[10px]"
                thumbStyles="data-[state=checked]:translate-x-3.5"
                id="enable-user/dsable-user"
              />
            </div>
          </div>
          {/* 2nd col  */}
          <div className="w-full flex justify-start md:justify-end">
            <div className="w-full max-w-[390px] grid grid-cols-[100px,1fr] md:grid-cols-[120px,1fr] gap-4">
              <Typography variant="p" className="text-white-4">
                Permissions
              </Typography>
              <div className="flex flex-col items-start gap-5">
                {Array(4)
                  .fill(0)
                  .map((item, index) => {
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <Switch
                          width="w-[28px]"
                          height="h-[14px]"
                          thumbHeight="h-[10px]"
                          thumbWidth="w-[10px]"
                          thumbStyles="data-[state=checked]:translate-x-3.5"
                          id=""
                        />
                        <label
                          htmlFor=""
                          className="text-sm leading-[10px] flex flex-col gap-2 text-white-2 font-normal"
                        >
                          Lorem Ipsum <br />{" "}
                          <span className="text-xs">
                            Lorem ipsum dolor sit amet
                          </span>
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full px-5 pb-3 items-center gap-3">
          <Button
            iconPosition="left"
            className="rounded-sm !bg-pink-1/20 text-[#FB0078]"
            icon={<Trash size={20} color="#FB0078" />}
          >
            Delete User
          </Button>
          <Button className="rounded-sm" variant="orangeGradient" size="sm">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
