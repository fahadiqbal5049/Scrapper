"use client";

import React from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CountryOptions, PhoneCodeOptions } from "@/data/manageProfile";
import CustomSelect from "@/components/shared/form/CustomSelect";

const UpdateProfile: React.FC = () => {
  return (
    <div className="w-full gap-4 md:gap-7 bg-primary rounded-lg p-4 flex flex-col">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-1 flex-col">
          <Typography variant="text" className="text-white-4 font-medium">
            Personal Information
          </Typography>
          <Typography variant="p" color="primary">
            Manage your Profile
          </Typography>
        </div>
        <Button variant="orangeGradient" className="rounded-sm" size="sm">
          Edit Profile
        </Button>
      </div>
      <div className="w-full flex flex-col md:gap-6 gap-4">
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          <Input
            label="Name"
            type="text"
            placeholder="John"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
          <Input
            label="Surname"
            placeholder="Doe"
            type="text"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
        </div>
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          <div className="flex flex-col gap-1">
            <label
              className="text-sm font-normal flex w-full justify-between items-center gap-1 text-white-2"
              htmlFor="email"
            >
              Email
              <button
                type="button"
                className="text-xs font-normal text-success-1"
              >
                Change e-mail
              </button>
            </label>
            <Input
              type="text"
              placeholder="John"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
          </div>
          <CustomSelect
            label="Country"
            options={CountryOptions}
            triggerStyles="border-none w-full bg-[#3A4249] rounded-md h-[43px]"
          />
        </div>
        <Input
          label="Street Address"
          type="text"
          className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
        />
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          <Input
            label="City"
            type="text"
            placeholder="John"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
          <Input
            label="State/Province"
            placeholder="Doe"
            type="text"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
        </div>
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          <Input
            label="ZIP / Postal Code"
            type="text"
            placeholder="John"
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
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          <Input
            label="Company Name"
            type="text"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
          <Input
            label="Tax Vat"
            type="text"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
        </div>
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          <Input
            label="Connect Your Slack"
            type="text"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
        </div>
      </div>
      {/* delete account -------------> */}
      <div className="w-full py-3 flex justify-between items-center gap-2 flex-wrap">
        <div className="flex flex-col gap-1">
          <Typography variant="text" className="text-white-4 font-medium">
            Account Delete
          </Typography>
          <Typography variant="p" color="primary">
            If you want to delete your account click this button
          </Typography>
        </div>
        <Button variant="outline" className="rounded-sm" size="sm">
          Delete My Account
        </Button>
      </div>
    </div>
  );
};

export default UpdateProfile;
