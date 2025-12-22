"use client";
import CustomSelect from "@/components/shared/form/CustomSelect";
import SignUpModal from "@/components/suggest-a-feature/shared/modals/SinupModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import { categoryOptions } from "@/data/suggestAFeatureData";
import { Paperclip } from "lucide-react";
import React, { useState } from "react";

const FeaturesRequestsForm = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const toggleIsPopup = () => setIsPopup(!isPopup);
  const toggleIsAdd = () => setIsAdd(!isAdd);
  return (
    <>
      <div className="w-full bg-primary rounded-lg p-4 sm:p-6">
        <div className="h-full w-full xl:w-[60%] flex flex-col gap-4 sm:gap-6">
          <Typography variant="text" className="font-medium">
            Features Requests
          </Typography>
          {isAdd ? (
            <>
              <Input
                label="Short, descriptive title"
                type="text"
                placeholder="title here"
                labelStyle="!text-white-1"
                className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
              />
              <Input
                label="Description"
                type="text"
                placeholder="Description here"
                labelStyle="!text-white-1"
                className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
              />
              <div className="w-full flex sm:flex-row flex-col gap-3 items-center justify-between">
                <CustomSelect
                  options={categoryOptions}
                  placeholder="Category"
                  triggerStyles="h-[29px] w-[300px] sm:w-[190px] rounded-[2px] !border-white-2"
                />
                <div className="flex items-center justify-start gap-3">
                  <button>
                    <Paperclip className="text-white-2" size={20} />
                  </button>{" "}
                  <Button
                    variant={"outline"}
                    onClick={toggleIsAdd}
                    className="h-[26px] text-xs font-normal"
                  >
                    Cancel
                  </Button>{" "}
                  <Button
                    onClick={toggleIsPopup}
                    variant={"orangeGradient"}
                    className="h-[26px] text-xs font-normal"
                  >
                    Create Post
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div
              onClick={toggleIsAdd}
              className="w-full h-[46px] border border-white-2 rounded-sm flex items-center justify-between cursor-pointer px-3"
            >
              <Typography color="primary">Share your feedback...</Typography>
              <span className="size-[20px] border border-pink-1 text-sm text-pink-1 font-medium rounded-sm flex items-center justify-center">
                +
              </span>
            </div>
          )}
        </div>
      </div>
      <SignUpModal isOpen={isPopup} closeEvent={toggleIsPopup} />
    </>
  );
};
export default FeaturesRequestsForm;
