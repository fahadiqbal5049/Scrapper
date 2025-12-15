"use client";

import React, { useState, useCallback } from "react";
import Typography from "../ui/typography";
import * as Icons from "@/svg/Icons";
import { Input } from "../ui/input";
import CustomSelect from "../shared/form/CustomSelect";
import { Button } from "../ui/button";
import { SizeOptions, StatusOptions } from "@/data/addNew";
import Image from "next/image";

const AddNew = () => {
  // states --------------->
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // actions ------------->

  const handleImageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    },
    []
  );
  return (
    <div className="w-full gap-4 md:gap-7 bg-primary rounded-lg p-4 flex flex-col">
      <Typography variant="p" color="primary">
        Add a new product to my catalog
      </Typography>
      <div className="w-full md:flex-row flex-col flex lg:gap-6 gap-4 items-start">
        {/* upload an image -----> */}
        <div
          className="w-full xs:w-[335px] mx-auto h-[261px] relative flex justify-center items-center flex-col gap-3 rounded-lg bg-[#3A4249]"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {preview ? (
            <Image
              src={preview}
              alt="Preview"
              fill
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Icons.uploadImage
                  className="w-[40px] h-[40px] cursor-pointer"
                  fill="fill-[#A3A3A3]"
                />
              </label>
              <Typography variant="p" color="primary">
                Drag & Upload your image here
              </Typography>
            </>
          )}
        </div>
        {/* inputs --------> */}
        <div className="w-full flex flex-1 flex-col gap-4">
          <Input
            label="Title"
            isRequired={true}
            type="text"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
          <div className="w-full grid grid-cols-2 lg:gap-6 gap-4">
            <Input
              label="Price"
              type="text"
              isRequired={true}
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <Input
              label="Stock"
              type="text"
              isRequired={true}
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
          </div>
          <div className="w-full grid grid-cols-2 lg:gap-6 gap-4">
            <Input
              label="Code"
              type="text"
              isRequired={true}
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <Input
              label="Brand"
              type="text"
              isRequired={true}
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
          </div>
          <div className="w-full grid grid-cols-2 lg:gap-6 gap-4">
            <Input
              label="Purchased Price"
              type="number"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <Input
              label="Purchased Date"
              type="text"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
          </div>
          <div className="w-full grid grid-cols-2 lg:gap-6 gap-4">
            <Input
              label="Expired Date"
              type="text"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />

            <CustomSelect
              label="Size"
              options={SizeOptions}
              triggerStyles="border-none w-full bg-[#3A4249] rounded-md h-[43px]"
            />
          </div>
          <div className="w-full grid grid-cols-2 lg:gap-6 gap-4">
            <Input
              label="Color"
              type="number"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <Input
              label="SKU"
              type="text"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
          </div>
          <div className="w-full grid grid-cols-2 lg:gap-6 gap-4">
            <Input
              label="Monitored URL"
              type="number"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />

            <CustomSelect
              label="Status"
              options={StatusOptions}
              triggerStyles="border-none w-full bg-[#3A4249] rounded-md h-[43px]"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-sm font-normal flex gap-1 text-white-2">
              Description
            </p>
            <textarea
              name=""
              id=""
              className="w-full focus:outline-none text-sm bg-[#3A4249] text-white-1/80 rounded-md min-h-[160px] p-2"
              placeholder="MacBook Pro blasts forward with the M3, M3Pro and M3Max chips. Built on3nanometre technologyand featuring anall-new GPU architecture, theyre the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability."
            ></textarea>
          </div>
          <div className="w-full flex py-0 sm:py-3 justify-end">
            <Button className="w-fit" variant="orangeGradient">
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
