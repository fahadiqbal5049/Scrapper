import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { CountryOptions } from "@/data/manageProfile";
import { PhoneCodeOptions } from "@/data/manageProfile";
import { Checkbox } from "@/components/ui/checkbox";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";

const AddNewUser = () => {
  return (
    <div className="size-full flex flex-col items-start justify-start gap-4 sm:gap-5 lg:gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/admin/manage-user">Users</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Add User</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full gap-5 bg-primary rounded-lg p-4 flex flex-col">
        <div className="w-full flex justify-between items-center gap-2 flex-wrap">
          <Typography variant="text" className="text-white-4 font-medium">
            User Information
          </Typography>
          <Button
            variant="orangeGradient"
            size="sm"
            className="rounded-sm w-[74px]"
          >
            Save
          </Button>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
            <Input
              label="Name"
              type="text"
              placeholder="John"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <Input
              label="Surename"
              placeholder="Doe"
              type="text"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
          </div>
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
            <Input
              label="E-mail"
              type="email"
              placeholder="E-mail"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <CustomSelect
              label="Country"
              options={CountryOptions}
              triggerStyles="border-none w-full bg-[#3A4249] rounded-md h-[43px]"
            />
          </div>
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
            <Input
              label="Company Name"
              type="text"
              placeholder="123 scraper"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <div className="w-full flex flex-col gap-1">
              <label
                className="text-sm font-normal  gap-1 text-white-2"
                htmlFor="email"
              >
                Phone
              </label>
              <div className="w-full h-[43px] grid grid-cols-[50px,1fr] sm:grid-cols-[100px,1fr] rounded-md bg-[#3A4249]">
                <CustomSelect
                  placeholder="+1"
                  options={PhoneCodeOptions}
                  triggerStyles="border-white-2 border-t-[0px] border-b-[0px] border-l-[0px] w-full bg-[#3A4249] rounded-l-md rounded-r-none h-full"
                />
                <Input
                  type="number"
                  className="w-full h-full bg-transparent border-none"
                />
              </div>
            </div>
          </div>
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
            <Input
              label="Connect Your Slack"
              type="text"
              placeholder="Connect Your Slack"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <Input
              label="Assigned Role"
              placeholder="Assigned Role"
              type="text"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
          </div>
          <div className="flex pt-4 justify-start items-center gap-2">
            <Checkbox
              className="w-[18px] h-[18px]"
              iconSize="w-4 h-4"
              id="additional-costs"
            />
            <label
              htmlFor="additional-costs"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <Typography variant="p" color="primary">
                I am aware of the additional costs per user and hereby agree to
                the terms.
              </Typography>
            </label>
            <InputHelpTooltip helperText="I am aware of the additional costs per user and hereby agree to the terms." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
